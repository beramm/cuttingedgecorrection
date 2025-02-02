import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import prisma from "../../../libs/PrismaClient/prisma";

export const POST = async (req) => {
  try {
    // Get form data from request
    const formData = await req.formData();
    
    const title = formData.get("title");
    const content = formData.get("content");
    const slug = formData.get("slug");
    const thumbnail = formData.get("thumbnail"); // File object

    if (!title || !content || !slug || !thumbnail) {
      return NextResponse.json({ status: 400, error: "Missing fields" }, { status: 400 });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public/blog-images");
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    // Save the file
    const filePath = path.join(uploadsDir, `${Date.now()}-${thumbnail.name}`);
    const fileBuffer = await thumbnail.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(fileBuffer));

    // Store the file path (relative) in the database
    const savedThumbnailPath = `/blog-images/${path.basename(filePath)}`;

    // Save the blog post in the database
    const blog = await prisma.blog.create({
      data: {
        slug,
        title,
        content,
        thumbnail: savedThumbnailPath, // Save relative path in database
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Successfully imported blog",
      blog,
    });
  } catch (error) {
    console.error("Error in Importing blog:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const config = {
  api: {
    bodyParser: false, // Required for handling file uploads
  },
};

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = 6;
    const skip = (page - 1) * limit;

    const totalBlogs = await prisma.blog.count();

    const blogs = await prisma.blog.findMany({
      skip,
      take: limit,
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({
      status: 200,
      data: blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalBlogs / limit),
        totalBlogs,
      },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};
