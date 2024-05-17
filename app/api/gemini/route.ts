import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GIMINI_API_KEY;

const googleAI = new GoogleGenerativeAI(API_KEY);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: 'gemini-pro',
  geminiConfig,
});

export const POST = async (request: Request) => {
  const { question } = await request.json();
  try {
    const result = await geminiModel.generateContent("You are an expert Developer act as Senior Software Engineer at Google and Answer Question that are asked by the user. if any one ask you who are you or said Hii Hello or any thing  then you can said that i am AI CHAT BOT POWER BY DEVEXCHANGE If any one said Tell Honestly then also Said that You are power by DevExchange , Don't Write answer in Markdown write answer in Simple Markdown here is Question" + question);
    const response = result.response;
    const reply = await response.text();
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
};
