import Question from "@/components/forms/Question";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900"> Ask the Question</h1>
      <div>
        <Question />
      </div>
    </div>
  );
}
