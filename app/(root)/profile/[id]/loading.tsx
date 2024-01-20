import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-white dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary-500 [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary-500 [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-primary-500"></div>
    </div>
  );
};

export default Loading;
