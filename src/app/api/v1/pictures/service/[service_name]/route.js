import prisma from "../../../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { service_name } = params;
  
  const formattedServiceName = service_name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  try {
    console.log("Formatted Service Name:", formattedServiceName);

    const pictures = await prisma.pictures.findMany({
      where: {
        service_name: formattedServiceName,
      },
    });

    return NextResponse.json({ status: 200, data: pictures });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "An error occurred",
      error: error.message,
    });
  }
};
