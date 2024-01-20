import { Schema, models, model, Document } from "mongoose";

export interface IChatMessage extends Document {
  question: string;
  answer: string;
  room: Schema.Types.ObjectId;
}

const ChatMessageSchema = new Schema({
  question: String,
  answer: String,
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
  },
});

const ChatMessage =
  models.ChatMessage || model("ChatMessage", ChatMessageSchema);

export default ChatMessage;
