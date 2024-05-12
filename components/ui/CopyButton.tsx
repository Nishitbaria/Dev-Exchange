"use client";
import React, { useState } from "react";
import { Button } from "./button";

const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const questionLink = `https://devexchanges.vercel.app/questions/${id}`;
    navigator.clipboard.writeText(questionLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
  };
  return (
    <Button
      className="bg-blue-500 text-white hover:bg-blue-700 mt-2"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : "Copy Question Link"}
    </Button>
  );
};

export default CopyButton;
