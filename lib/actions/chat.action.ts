// import Room from "@/database/room.model";
import Room from "@/database/room.model";
import { connectToDatabase } from "../mongoose";
import ChatMessage from "@/database/chat.model";
import { createRoom } from "./room.action";

export async function getChat(params: any) {
  try {
    connectToDatabase();
    // console.log("params", params);
    const id = params;
    console.log("Room id", id);
    if (!id) {
      throw new Error("No room id provided");
    }
    console.log("Room id", id);
    const message = await ChatMessage.find({ id })
      .sort({ createdAt: -1 })
      .populate("messages");

    if (!message) {
      throw new Error("No message found");
    }

    return message;
  } catch (error) {
    console.log(error);
  }
}
// interface chatParams {
//   question: string;
//   answer: string;
//   roomId: string;
// }

export async function saveChatMessage(
  question: string,
  answer: string,
  roomId?: string
) {
  try {
    connectToDatabase();

    // const { roomId } = params;

    // const { question, answer } = params;
    console.log(roomId);
    let newroom;

    if (!roomId) {
      newroom = await createRoom();
      roomId = newroom._id;
    }

    if (!question && !answer)
      throw new Error("No question and answer provided...!");

    /** specify data to the message model */
    const message = await ChatMessage.create({
      question,
      answer,
      room: roomId,
    });

    console.log("message", message);

    await Room.findByIdAndUpdate(roomId, {
      $push: { messages: message._id },
    });

    if (!message) {
      throw new Error("No message found");
    }

    return message;
  } catch (error) {
    console.log(error);
  }
}
