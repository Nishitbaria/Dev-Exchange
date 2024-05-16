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
    const result = await geminiModel.generateContent("Give the brief answer to this question in 100-500 character:\n\n"+question);
    const response = result.response;
    const reply=response.text()
    return NextResponse.json({reply });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
};

