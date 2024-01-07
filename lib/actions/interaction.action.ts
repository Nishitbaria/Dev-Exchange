"use server";

import { ViewQuestionParams } from "./shared.types";
import { connectToDatabase } from "../mongoose";
import Question from "@/database/question.model";
import Interaction from "@/database/interaction.model";

export async function ViewQuestion(params: ViewQuestionParams) {
  try {
    await connectToDatabase();

    const { questionId, userId } = params;
    // update view count for the question

    await Question.findByIdAndUpdate(questionId, {
      $inc: { views: 1 }, // increment view count by 1
    });

    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        question: questionId,
        action: "view",
      });

      if (existingInteraction) return console.log("already viewed");
      // create a new interaction if it doesn't exist

      await Interaction.create({
        user: userId,
        question: questionId,
        action: "view",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
