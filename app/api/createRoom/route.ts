import { createRoom, getRoombyId } from "@/lib/actions/room.action";
// import { createChat } from "@/lib/actions/chat.action";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const room = await createRoom();

    console.log("Room created successfully");

    return NextResponse.json({
      room,
    });
  } catch (error) {
    console.error("Error saving chat message:", error);
    return NextResponse.json({
      error: "Error is coming from req.json in api/CreatRoom/route.ts",
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const room = await getRoombyId(id);
    console.log(id);
    console.log("Room fetched successfully", room);

    return NextResponse.json({
      name: room.name,
      messages: room.messages,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error is coming from req.json in api/saveMessage/route.ts",
    });
  }
}

// export async function PostChat(req: Request) {
//   try {
//     const { question, answer, roomId } = await req.json();

//     const message = await createChat(question, answer, roomId);
//     console.log(message);
//     console.log("Chat message saved successfully");

//     return NextResponse.json({
//       message,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       error: "Message is Not saved",
//     });
//   }
// }

// export async function POST(res: Request) {
//   const { text, user } = await res.json();
//   console.log("..............................................");
//   console.log("text", text);
//   console.log("user", user);
//   try {
//     const message = await saveChatMessage(text, user);
//     console.log(message);
//     console.log("Chat message saved successfully");

//     return NextResponse.json({
//       message,
//     });
//   } catch (error) {
//     console.error("Error saving chat message:", error);
//     return NextResponse.json({
//       error: "Error is coming from req.json in api/saveMessage/route.ts",
//     });
//   }
// }
