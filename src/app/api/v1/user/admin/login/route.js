import prisma from "../../../../../libs/PrismaClient/prisma";
import { NextResponse } from "next/server";
import { SignJWT } from "jose"; 
import bcrypt from "bcryptjs";

const SECRET_KEY = process.env.JWT_SECRET;

export const POST = async (req) => {
  try {
    // Parse the request body
    const body = await req.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ status: 400, error: "Email and password are required" });
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ status: 401, error: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ status: 401, error: "Invalid email or password" });
    }

    // Generate a JWT token using jose
    const token = await new SignJWT({ id: user.id, email: user.email })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(SECRET_KEY));

    // Return the token
    return NextResponse.json({
      status: 200,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ status: 500, error: "Internal server error" });
  }
};