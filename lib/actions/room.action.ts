import Room from "@/database/room.model";
import { connectToDatabase } from "../mongoose";

export async function getALLRooms() {
  try {
    connectToDatabase();

    const rooms = await Room.find();
    if (!rooms) {
      throw new Error("No rooms found");
    }
    return rooms;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// interface CreateRoomParams {
//   name: string;
//   messages: Schema.Types.ObjectId[];
// }

export async function createRoom() {
  try {
    connectToDatabase();

    const len = (await Room.find({})).length;

    const defaultRoom = {
      name: `Room ${len + 1}`,
      messages: [],
    };

    const chat = await Room.create(defaultRoom);

    return chat;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getRoombyId(params: any) {
  try {
    connectToDatabase();

    const { id } = params;

    const room = await Room.findOne({ id });

    if (!room) {
      throw new Error("Room not found");
    }

    return room;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteRoom(params: any) {
  try {
    connectToDatabase();

    const { roomId } = params;

    await Room.findByIdAndDelete(roomId);

    return "delete success";
  } catch (error) {
    console.log(error);
  }
}
