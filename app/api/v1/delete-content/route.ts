import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json(); // Parse request body
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Content ID is required" },
        { status: 400 }
      );
    }

    await prisma.content.delete({
      where: { id },
    });

    return NextResponse.json({ success: "Content Deleted" }, { status: 200 });
  } catch (err: unknown) {
    // Log the error safely
    console.error(
      "Error on deleting content:",
      err instanceof Error ? err.message : err
    );

    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 }
    );
  }
}
