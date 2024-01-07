import Question from "@/components/forms/Question";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";
import React from "react";

const page = async ({ params }: ParamsProps) => {
  const userid = auth();
  if (!userid) return null;

  const mongouser = await getUserById(userid);
  const result = await getQuestionById({ questionId: params.id });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900"> Edit Question Page</h1>

      <div className="mt-9">
        <Question
          type="Edit"
          mongoUserId={mongouser._id}
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
};

export default page;
