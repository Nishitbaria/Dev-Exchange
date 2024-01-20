import { Schema, models, model, Document } from "mongoose";

export interface IROOM extends Document {
  name: string;
  messages: Schema.Types.ObjectId[];
}

const RoomSchema = new Schema({
  name: String,
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "ChatMessage",
    },
  ],
});

const Room = models.Room || model("Room", RoomSchema);

export default Room;
