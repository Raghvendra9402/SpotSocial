import { auth } from "@/auth";
import prisma from "@/lib/db";
import { getEmbedding } from "@/lib/openai";
import { notesIndex } from "@/lib/pinecone";
import { contentSchema } from "@/lib/Schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // const { selectedItem, title, description, link } = await req.json();
    const body = await req.json();

    const parsedBody = contentSchema.safeParse(body);

    if (!parsedBody.success) {
      console.error("parse error", parsedBody.error);
      return NextResponse.json({ error: "Invalid Input" });
    }

    const { selectedItem, title, description, link } = parsedBody.data;
    const session = await auth();
    const userEmail = session?.user?.email;
    console.log(selectedItem, link);

    if (!selectedItem || !link || !userEmail) {
      return NextResponse.json(
        { error: "Missing required fields: selectedItem, link, or userId" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    //create embedding
    // const embedding = await getEmbeddingForContent(selectedItem, title, link);

    //start a transaction
    // const content = await prisma.$transaction(async (tx) => {
    await prisma.content.create({
      data: {
        type: selectedItem,
        title: title,
        description: description,
        link: link,
        userEmail: user.email,
      },
    });

    //   await notesIndex.upsert([
    //     {
    //       id: content.id,
    //       values: embedding,
    //       metadata: { userEmail: user.email },
    //     },
    //   ]);

    //   return content;
    // });

    return NextResponse.json({ success: "Content Added Successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Content Addition Failed" });
  }
}

// async function getEmbeddingForContent(
//   selectedItem: string,
//   title: string,
//   link: string
// ) {
//   return getEmbedding(selectedItem + "\n\n" + title + "\n\n" + link + "\n\n");
// }
