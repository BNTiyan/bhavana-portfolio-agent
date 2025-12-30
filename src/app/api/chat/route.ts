import { GoogleGenerativeAI } from "@google/generative-ai";
import AiSystemInformation from "@/data/AiSystemInformation";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const history = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
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
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
}

