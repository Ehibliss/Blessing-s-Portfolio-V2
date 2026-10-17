import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createAdminSession, COOKIE_NAME, SESSION_DURATION } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password ||
      password.length > 128
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 400 },
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail || !passwordHash) {
      console.error("Admin login environment variables are missing.");
      return NextResponse.json(
        { success: false, message: "Login is temporarily unavailable." },
        { status: 500 },
      );
    }

    const emailMatches =
      email.trim().toLowerCase() === adminEmail.trim().toLowerCase();

    const passwordMatches = await bcrypt.compare(password, passwordHash);

    if (!emailMatches || !passwordMatches) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 },
      );
    }

    const token = await createAdminSession(adminEmail.trim());

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_DURATION,
    });

    return response;
  } catch (error) {
    console.error("Admin login failed:", error.message);

    return NextResponse.json(
      { success: false, message: "Unable to log in right now." },
      { status: 500 },
    );
  }
}
