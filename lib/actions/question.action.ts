"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tags.model";

export async function createQuestion(params: any) {
  "use server";
  try {
    // we have to connect to the database
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // create the question in the database

    const question = await Question.create({
      title,
      content,
      tags,
      author,
    });

    // Create the tags or get them if they already exist
    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag);

      await Question.findByIdAndUpdate(question._id, {
        $push: { tags: { $each: tagDocuments } },
      });
    }
    // create an interation recoard for the user 's ask_question action

    // Increment author's reputation by 5+ for creating a question 

  } catch (e) {
    console.log(e);
    return e;
  }
}
