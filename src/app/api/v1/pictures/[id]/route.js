import prisma from "../../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const id = parseInt(params.id);

    const existingImage = await prisma.pictures.findUnique({
      where: { id: id }
    });

    if (!existingImage) {
      return NextResponse.json(
        { status: 404, error: "Image not found" },
        { status: 404 }
      );
    }

    await prisma.pictures.delete({
      where: { id: id }
    });

    return NextResponse.json({
      status: 200,
      message: "Image successfully deleted"
    });

  } catch (error) {
    console.error("Error in Deleting Image:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};