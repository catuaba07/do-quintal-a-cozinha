import { Groq } from "groq-sdk";
import { NextRequest } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  if (request.headers.get("API_KEY") !== process.env.API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid API Key" }), {
      status: 401,
    });
  }

  const body = await request.json();

  if (!body.url) {
    return new Response(JSON.stringify({ error: "Audio URL is required" }), {
      status: 400,
    });
  }

  try {
    const completion = await groq.audio.transcriptions.create({
      model: "whisper-large-v3-turbo",
      url: body.url,
      language: body.language || "pt",
    });

    return new Response(
      JSON.stringify({
        message: "Audio transcribed successfully",
        data: completion,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to transcribe audio", details: error }),
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({ error: "Method not allowed. Use POST instead." }),
    { status: 405 }
  );
}
