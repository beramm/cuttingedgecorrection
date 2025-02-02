import prisma from "../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server"

export const GET = async() => {
  const blog = await prisma.blog.findMany({
    orderBy: { created_at: 'desc' }
  })

  return NextResponse.json({ status: 200, data: blog })
}


export const POST = async (req)=> { 
  try{
  const body = await req.json();
  const { slug , title , content , thumbnail } = body

  const blog = await prisma.blog.create({
    data: {
     slug ,
     title,
     content,
     thumbnail
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Successfully import blog",
    blog,
  });
} catch (error) {
  console.error("Error in Importing blog :", error);
  return NextResponse.json({ status: 500, error: "Internal server error" } , {status : 500});
}
}