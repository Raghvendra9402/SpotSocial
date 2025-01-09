import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw new Error("api key error in .env");
}

const pinecone = new Pinecone({ apiKey });

export const notesIndex = pinecone.Index("nextjs-spot-social");
