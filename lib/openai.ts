import { OpenAI } from "openai";
const apiKey = process.env.OPEN_AI_API;

if (!apiKey) {
  throw new Error("key is not working in .env");
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });

  const embedding = response.data[0].embedding;

  if (!embedding) throw Error("Embedding generation failed");

  console.log(embedding);

  return embedding;
}
