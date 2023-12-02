"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  "use server";
  try {
    // we have to connect to the database
    connectToDatabase();
    console.log("params", params);
  } catch (e) {
    console.log(e);
    return e;
  }
}
