import prisma from "../../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  {
    try {
      const id = parseInt(params.id);
      const blog = await prisma.blog.findUnique({
        where: { id: id },
      });
      if (!blog) {
        return NextResponse.json(
          { status: 404, error: "Blog not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        status: 200,
        message: "Success",
        blog,
      });
    } catch (error) {
      console.error("Error in Retreiving Blog:", error);
      return NextResponse.json(
        { status: 500, error: "Internal server error" },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const id = parseInt(params.id);

    const existingBlog = await prisma.blog.findUnique({
      where: { id: id },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { status: 404, error: "Blog not found" },
        { status: 404 }
      );
    }

    await prisma.blog.delete({
      where: { id: id },
    });

    return NextResponse.json({
      status: 200,
      message: "Blog successfully deleted",
    });
  } catch (error) {
    console.error("Error in Deleting Blog:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const id = parseInt(params.id);
    const body = await req.json();

    const existingBlog = await prisma.blog.findUnique({
      where: { id: id },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { status: 404, error: "Blog not found" },
        { status: 404 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: id },
      data: {
        slug: body.slug || existingBlog.slug,
        title: body.title || existingBlog.title,
        content: body.content || existingBlog.content,
        thumbnail: body.thumbnail || existingBlog.thumbnail,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Blog successfully updated",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error in Updating Blog:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};
