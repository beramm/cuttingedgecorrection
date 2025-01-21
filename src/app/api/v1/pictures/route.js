import prisma from "../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server"

export const GET = async() => {
  const pictures = await prisma.pictures.findMany({
    orderBy: { created_at: 'desc' }
  })

  return NextResponse.json({ status: 200, data: pictures })
}


export const POST = async (req)=> { 
  try{
  const body = await req.json();
  const { service_name , url } = body

  const picture = await prisma.pictures.create({
    data: {
      url,
      service_name
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Successfully import picture",
    user: { id: picture.id, url: picture.url, service_name: picture.service_name, created_at: picture.created_at },
  });
} catch (error) {
  console.error("Error in Importing Picture :", error);
  return NextResponse.json({ status: 500, error: "Internal server error" } , {status : 500});
}
}