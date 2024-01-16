import { connectToDatabase } from "../mongoose";
import ChatMessage from "@/database/chat.model";

export async function saveChatMessage(text: string, user: string) {
  console.log("Saving chat message");
  try {
    connectToDatabase();

    const newMessage = await ChatMessage.create({ text, user });
    await newMessage.save();
    console.log("Chat message saved successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getChatMessages() {
  console.log("Fetching chat messages");
  try {
    connectToDatabase();

    const messages = await ChatMessage.find({}).sort({ createdAt: 1 });
    return messages;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
