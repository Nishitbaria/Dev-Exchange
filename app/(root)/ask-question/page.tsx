import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  // const { userId } = auth();
  const userId = "123456";
  if (!userId) {
    redirect("/sign-in");
  }

  const mongoUser = await getUserById({ userId });

  console.log("mongoUser", mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900"> Ask the Question</h1>
      <div>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
}
