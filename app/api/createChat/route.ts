import { saveChatMessage, getChat } from "@/lib/actions/chat.action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question, answer, roomId } = await req.json();
    console.log("answer", answer);
    const message = await saveChatMessage(question, answer, roomId);

    if (!message) throw new Error("No message found");

    console.log(message);
    console.log("Chat message saved successfully");

    return NextResponse.json({
      message,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Message is Not saved",
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("Room id successfully", id);
    const message = await getChat(id);

    return NextResponse.json({
      message,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Message is Not saved",
    });
  }
}
