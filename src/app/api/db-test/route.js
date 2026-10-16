import { NextResponse } from "next/server";
import poolData from "@/lib/db";

export async function GET() {
  try {
    const result = await poolData.query("SELECT NOW() AS current_time");

    return NextResponse.json({
      success: true,
      message: "PostgreSQL connection successful!",
      time: result.rows[0].current_time,
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed.",
      },
      { status: 500 },
    );
  }
}
