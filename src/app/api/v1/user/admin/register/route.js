import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../../../libs/PrismaClient/prisma";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ status: 400, error: "All fields are required" } , {status : 400});
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }, 
    });

    if (existingUser) {
      return NextResponse.json({ status: 409, error: "Email is already registered" } , {status : 409});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = "ADMIN";

    // Create a new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
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
