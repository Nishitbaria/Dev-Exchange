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
  model: 'gemini-1.5-flash-latest',
  geminiConfig,
});

const conversationHistory: { [userId: string]: string[] } = {};

export const POST = async (request: Request) => {
  const { question, userId } = await request.json();
  try {

    const history = conversationHistory[userId] || [];
    console.log('history:', history);

    history.push(`User: ${question}`);


    const result = await geminiModel.generateContent(
      `You are an expert teacher in explaining anything using a simple human tone and words user will send your question in the form of PDF or text you have to amylase the things and then you have to give perfect answers in a complete manner if you have any droughts during question just ask the users to make the context clear
      
      Conversation history:
      ${history.join('\n')}

      User: ${question}`
    );
    const response = result.response;
    const reply = await response.text();

    // Add the AI's response to the conversation history
    history.push(`AI: ${reply}`);

    // Update the conversation history for the user
    conversationHistory[userId] = history

    console.log('after history:', history);;

    return NextResponse.json({ reply });


  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
};
