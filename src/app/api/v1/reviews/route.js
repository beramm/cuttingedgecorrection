import prisma from "../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server"

export const GET = async() => {
  const reviews = await prisma.reviews.findMany({
    orderBy: { created_at: 'desc' }
  })

  return NextResponse.json({ status: 200, data: reviews })
}

export const POST = async (req)=> { 
  try{
  const body = await req.json();
  const { user , content } = body

  const reviews = await prisma.reviews.create({
    data: {
      user,
      content
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Successfully import Reviews",
    user: { id: reviews.id, user: reviews.user , content: reviews.content , created_at: reviews.created_at},
  });
} catch (error) {
  console.error("Error in Importing Reviews :", error);
  return NextResponse.json({ status: 500, error: "Internal server error" } , {status : 500});
}
}