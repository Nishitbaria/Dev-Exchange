"use client";

import GenerativeAIComponent from "@/components/shared/GenerativeAIComponent";
import React from "react";

export default function page() {
  return (
    <div className="relative h-[5000px]">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Tital Chat */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            Welcome to Dev Exchange AI
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Your AI-powered copilot for the web
          </p>
        </div>

        {/* Prompt Messages */}
        <GenerativeAIComponent />
      </div>
    </div>
  );
}
