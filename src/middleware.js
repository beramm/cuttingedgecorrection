  import { NextResponse } from "next/server";
  import * as jose from 'jose';

  const SECRET_KEY = process.env.JWT_SECRET;

  export async function middleware(req) {
    const url = req.nextUrl.pathname;
    
    // If it's not a POST request, allow it through immediately
    if (req.method !== 'POST') {
      return NextResponse.next();
    }

    // Define routes that need POST protection
    const protectedRoutes = [
      "/api/v1/pictures",
      "/api/v1/reviews"
    ];

    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some(route => 
      url.startsWith(route)
    );

    // If not a protected route, allow the request
    if (!isProtectedRoute) {
      return NextResponse.next();
    }

    // Token validation
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    try {
      // Convert secret to Uint8Array
      const secretKey = new TextEncoder().encode(SECRET_KEY);
      
      // Verify the token
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (err) {
      console.log("Token verification error:", err.message);
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      );
    }
  }

  export const config = {
    matcher: ["/api/v1/pictures/:path*", "/api/v1/reviews/:path*"],
  };