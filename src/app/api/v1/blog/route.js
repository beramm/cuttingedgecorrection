import { NextResponse } from "next/server";
import prisma from "../../../libs/PrismaClient/prisma";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title , content , slug , thumbnail } = body
  
    const blog = await prisma.blog.create({
      data: {
       title ,
       content , 
       slug , 
       thumbnail
      },
    });
    return NextResponse.json({
      status: 201,
      message: "Successfully import blog",
      blog
    })
   
  } catch (error) {
    console.error("Error in Importing blog:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
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

export const dynamic = 'auto'