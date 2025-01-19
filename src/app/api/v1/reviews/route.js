import prisma from "../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server"

export const GET = async() => {
  const reviews = await prisma.reviews.findMany({
    orderBy: { created_at: 'desc' }
  })

  return NextResponse.json({ status: 200, data: reviews })
}