import { Schema, models, model, Document } from "mongoose";

export interface IChatMessage extends Document {
  text: string;
  user: string;
  createdAt: Date;
}

const ChatMessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ChatMessage =
  models.ChatMessage || model("ChatMessage", ChatMessageSchema);

export default ChatMessage;
