import { auth } from "@/auth";
import prisma from "@/lib/db";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ message: "user not found" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not Found" });
    }

    const content = await prisma.content.findMany({
      where: {
        userEmail: user.email,
      },
    });
    console.log(content);

    return NextResponse.json(content);
  } catch (err) {
    console.log(err, "Get failed");
  }
}
