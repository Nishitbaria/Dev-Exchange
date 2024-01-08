/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";

export default function GenerativeAIComponent() {
  const [messages, setMessages] = useState<{ text: string; user: string }[]>(
    []
  );
  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  // eslint-disable-next-line no-unused-vars
  const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);

  const API_KEY = "AIzaSyABfESLHqpjqBdZFlt3zC4Ypd0dDL7_aSU";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const isCodeSnippet = (text: string): boolean => {
    return text.includes("```");
  };

  const formatMessage = (text: string): string => {
    return isCodeSnippet(text) ? text : `${text}`;
  };

  // @ts-ignore

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
    setMessages([...messages, { text: inputText, user: "user" }]);

    // Show typing indicator
    setIsTyping(true);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(inputText);
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
        updatedMessages[typingIndicatorIndex] = {
          text: formattedText,
          user: "ai",
        };
      }
      return updatedMessages;
    });

    // Clear the input
    setInputText("");
    // Hide typing indicator
    setIsTyping(false);
  };

  const startNewChat = (): void => {
    // Clear the chat history
    setMessages([]);

    // Clear the input
    setInputText("");
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
      <div className="mt-16 flex-1  space-y-6 overflow-y-auto rounded-xl bg-black  p-4 text-sm leading-6 text-slate-900 shadow-sm dark:text-slate-300 sm:text-base sm:leading-7">
        {messages.map((msg, index) => (
          // @eslint-ign
          <div
            key={index}
            className={`flex items-center gap-2 ${
              msg.user === "user" ? "start" : "end"
            }`}
          >
            {/* Image of user */}
            <Image
              className={`mr-2 flex h-8 w-8 rounded-full sm:mr-4`}
              src={`https://dummyimage.com/128x128/${
                msg.user === "user" ? "363536" : "354ea1"
              }/ffffff&text=${msg.user.toUpperCase()}`}
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
          className="mx-auto mb-4 mt-2 w-full rounded-md bg-blue-700 px-2 py-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
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
              className="block w-full resize-none rounded-xl border-none bg-gray-700 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:ring-blue-600 sm:text-base"
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
              className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
            >
              Send <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
