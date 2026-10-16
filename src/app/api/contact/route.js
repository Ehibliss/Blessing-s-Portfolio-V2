import { NextResponse } from "next/server";
import poolData from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    // Save the message to PostgreSQL
    const result = await poolData.query(
      `INSERT INTO contact_messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
      [
        name.trim(),
        email.trim(),
        typeof subject === "string" ? subject.trim() || null : null,
        message.trim(),
      ],
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        contact: result.rows[0],
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error.message);

    return NextResponse.json(
      { success: false, message: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
