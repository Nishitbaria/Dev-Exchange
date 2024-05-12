"use client";
import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const questionLink = `https://devexchanges.vercel.app/questions/${id}`;
    navigator.clipboard.writeText(questionLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400); // Hide the message after 2 seconds
  };
  return (
    <button onClick={handleCopy} className=" my-3 mx-3">
      {copied ? (
        <CopyCheck size={18} color="white" />
      ) : (
        <Copy size={18} color="white" />
      )}
    </button>
  );
};

export default CopyButton;
