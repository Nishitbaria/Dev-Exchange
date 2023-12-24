import * as z from "zod";
import { Types } from "mongoose"; // Importing Schema for ObjectI
export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
  author: z.instanceof(Types.ObjectId).or(z.any()), // Assuming author can be an ObjectId or any IUser type
  path: z.string(), // Assuming path is a string
});
