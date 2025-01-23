import { use } from "react";
import prisma from "../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server"

export const GET = async() => {
  const user = await prisma.user.findMany({
    where: {
      role: 'USER',
    },
  });

  return NextResponse.json({ status: 200, data: user })
}
