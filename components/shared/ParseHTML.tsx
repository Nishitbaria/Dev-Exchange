"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import parse from "html-react-parser";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-solidity";
import "prismjs/components/prism-json";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-r";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-mongodb";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { Button } from "../ui/button";

interface Props {
  data: string;
}

export default function ParseHTML({ data }: Props) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); 
  };
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`w-full min-w-full relative`}>
      <Button
        onClick={handleCopy}
        className="absolute top-0 right-0 bg-blue-500 text-white  mx-1 my-1   hover:bg-blue-700"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
      <div className="markdown">
      {parse(data)}
      </div>
    </div>
  );
}
