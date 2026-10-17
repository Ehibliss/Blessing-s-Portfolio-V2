import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import poolData from "@/lib/db";
import { COOKIE_NAME, verifyAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    const session = await verifyAdminSession(token);

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const result = await poolData.query(
      `SELECT id, name, email, subject, message, created_at
       FROM contact_messages
       ORDER BY created_at DESC
       LIMIT 100`,
    );

    return NextResponse.json({
      success: true,
      messages: result.rows,
    });
  } catch (error) {
    console.error("Admin messages API failed:", error.message);

    return NextResponse.json(
      { success: false, message: "Unable to load messages." },
      { status: 500 },
    );
  }
}
