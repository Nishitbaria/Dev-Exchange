import { saveChatMessage } from "@/lib/actions/chat.action";

import { NextResponse } from "next/server";

export async function POST(res: Request) {
  const { text, user } = await res.json();

  try {
    const message = await saveChatMessage(text, user);
    console.log(message);
    console.log("Chat message saved successfully");

    return NextResponse.json({
      message,
    });
  } catch (error) {
    console.error("Error saving chat message:", error);
    return NextResponse.json({
      error: "Error is coming from req.json in api/saveMessage/route.ts",
    });
  }
}
