import { NextResponse } from "next/server";
import prisma from "../../../../libs/PrismaClient/prisma";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email ) {
      return NextResponse.json({ status: 400, error: "All fields are required" } , {status : 400});
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }, 
    });

    if (existingUser) {
      return NextResponse.json({ status: 409, error: "Email is already registered" } , {status : 409});
    }

    const role = "USER";

    // Create a new user
    const user = await prisma.user.create({
      data: {
        email,
        password : "",
        role,
      },
    });

    return NextResponse.json({
      status: 201,
      message: "User registered successfully",
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ status: 500, error: "Internal server error" } , {status : 500});
  }
};
