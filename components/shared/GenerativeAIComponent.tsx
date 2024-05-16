/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import axios from "axios";

interface Props {
  imgurl: any;
  userId: string;
}

export default function GenerativeAIComponent({ imgurl, userId }: Props) {
  const [messages, setMessages] = useState<{ text: string; user: string }[]>(
    []
  );
  const [roomId, setRoomId] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GIMINI_API_KEY || "";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const isCodeSnippet = (text: string): boolean => {
    return text.includes("```");
  };

  const formatMessage = (text: string): string => {
    return isCodeSnippet(text) ? text : `${text}`;
  };
  // eslint-disable-next-line no-undef
  const renderMarkdown = (text: string): JSX.Element => {
    const isCode = isCodeSnippet(text);

    if (isCode) {
      return (
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={atomDark}
        >
          {text}
        </SyntaxHighlighter>
      );
    }

    return <p>{text}</p>;
  };

  const generateContent = async (): Promise<void> => {
    // Show user's message
    const userMessage = { text: inputText, user: "user" };
    setMessages([...messages, userMessage]);

    // Save user's message to MongoDB
    // await saveMessageToMongoDB(userMessage);

    // Show typing indicator
    setIsTyping(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      `You are an expert Developer act as Senior Software Engineer at Google and Answer Question that are asked by the user. if any one ask you who are you or said Hii Hello or any thing  then you can said that i am AI CHAT BOT POWER BY DEVEXCHANGE If any one said Tell Honestly then also Said that You are power by DevExchange , Don't Write answer in Markdown write answer in Simple Markdown here is Question ${inputText}`
    );
    const response = await result.response;
    const text = await response.text();

    // Update the typing indicator to show the actual response
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      const typingIndicatorIndex = updatedMessages.findIndex(
        (msg) => msg.text === "..." && msg.user === "ai"
      );
      if (typingIndicatorIndex !== -1) {
        const formattedText = formatMessage(text);
        const aiMessage = { text: formattedText, user: "ai" };
        updatedMessages[typingIndicatorIndex] = aiMessage;

        // Save AI's response to MongoDB
      }

      return updatedMessages;
    });
    saveMessageToMongoDB({
      text: inputText,
      user: formatMessage(text),
    });

    // Clear the input
    setInputText("");
    // Hide typing indicator
    setIsTyping(false);
  };

  const startNewChat = async () => {
    // Clear the chat history
    setMessages([]);

    // Clear the input
    setInputText("");

    try {
      // create rroom
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/createRoom`
      );
      if (response.data) {
        console.log("Room created successfully");

        // router.push(`/chat/${userId}/${response.data.room._id}`);
        alert("Room created successfully");
        setRoomId(response.data.room?._id);
      }
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  const saveMessageToMongoDB = async (message: {
    text: string;
    user: string;
  }): Promise<void> => {
    console.log(message, message.user, message.text);
    try {
      console.log("Message:", message);
      console.log("RoomId:", roomId);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/createChat`,
        {
          question: message.text,
          answer: message.user,
          roomId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      console.log("Room id after", response.data.message.room);
      setRoomId(response.data.message.room);
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Error saving message to MongoDB:", error);
    }
  };

  useEffect(() => {
    // If the AI is typing, simulate a delay before receiving the response
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        // Show a simulated AI response
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "...", user: "ai" },
        ]);
      }, 500); // Simulated delay in milliseconds

      // Clear the timeout when the component is unmounted or when the AI responds
      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping]);

  return (
    <>
      {/* response components */}
      <div className="background-light700_dark400 mt-16  flex-1 space-y-6 overflow-y-auto rounded-xl p-4 text-sm leading-6 text-slate-900 shadow-sm dark:text-slate-300 sm:text-base sm:leading-7">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${msg.user === "user" ? "start" : "end"}`}
          >
            {/* Image of user */}
            <Image
              className={`mr-2 flex h-8 w-8 rounded-full sm:mr-4`}
              src={
                msg.user === "user"
                  ? imgurl
                  : "https://cdn-icons-png.flaticon.com/512/5611/5611037.png"
              } // Use the actual URL for AI avatar here
              alt={`${msg.user} Avatar`}
              width={20}
              height={20}
            />
            {/* Message */}
            <div className="space-y-3 overflow-auto rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-slate-900">
              <div className="space-y-2">
                <div className="flex items-center gap-2 whitespace-pre-wrap text-sm text-gray-800 dark:text-white">
                  {renderMarkdown(msg.text)}
                </div>
                {/* Copy message Part */}
                <div className="mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500">
                  {msg.user === "ai" && (
                    <CopyToClipboard
                      text={msg.text}
                      onCopy={() => setIsCodeCopied(true)}
                    >
                      <button className="hover:text-blue-600" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                        </svg>
                      </button>
                    </CopyToClipboard>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="static items-center justify-center">
        {/* New chat button */}
        <button
          onClick={startNewChat}
          className="mx-auto mb-4 mt-2 w-full rounded-md bg-primary-500 px-2 py-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Start New Chat
        </button>
        {/* Prompt message input */}
        <form
          className="mt-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            generateContent();
          }}
        >
          <label htmlFor="chat-input" className="sr-only">
            Enter your prompt
          </label>
          <div className="relative">
            <button
              type="button"
              className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600"
            >
              {/* ... (unchanged) */}
            </button>
            <textarea
              id="chat-input"
              className="background-light700_dark400 text-dark300_light700 block w-full resize-none  rounded-xl border-none p-4 pl-10  pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600  dark:placeholder:text-slate-400 dark:focus:ring-blue-600 sm:text-base"
              placeholder="Enter your prompt"
              rows={1}
              value={inputText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setInputText(e.target.value)
              }
              required
            ></textarea>
            <button
              type="submit"
              className="absolute bottom-2 right-2.5 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
            >
              Send <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
