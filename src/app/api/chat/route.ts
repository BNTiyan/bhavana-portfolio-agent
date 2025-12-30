import { GoogleGenerativeAI } from "@google/generative-ai";
import AiSystemInformation from "@/data/AiSystemInformation";

export async function POST(req: Request) {
  try {
    // Check for API key
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      console.error("GOOGLE_API_KEY is not set");
      return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'No messages provided' }), { status: 400 });
    }

    const history = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: AiSystemInformation 
    });

    const chat = model.startChat({
      history: history.slice(0, -1),
    });

    const lastMessage = history[history.length - 1].parts[0].text;
    const result = await chat.sendMessageStream(lastMessage);

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            controller.enqueue(encoder.encode(chunkText));
          }
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: 'Server Error', details: errorMessage }), { status: 500 });
  }
}

