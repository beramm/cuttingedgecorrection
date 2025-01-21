import prisma from "../../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    // Convert string ID to integer
    const id = parseInt(params.id);

    const existingReview = await prisma.reviews.findUnique({
      where: { id: id }
    });

    if (!existingReview) {
      return NextResponse.json(
        { status: 404, error: "Review not found" },
        { status: 404 }
      );
    }

    await prisma.reviews.delete({
      where: { id: id }
    });

    return NextResponse.json({
      status: 200,
      message: "Review successfully deleted"
    });

  } catch (error) {
    console.error("Error in Deleting Review:", error);
    return NextResponse.json(
      { status: 500, error: "Internal server error" },
      { status: 500 }
    );
  }
};