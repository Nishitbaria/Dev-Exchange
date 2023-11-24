import { count } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

export default function RightSidebar() {
  const hotQuestion = [
    {
      _id: 1,
      title: "How to use React Query?",
      count: 10,
    },
    {
      _id: 2,
      title: "How to use React Query?",
      count: 10,
    },
    {
      _id: 3,
      title: "How to use React Query?",
      count: 10,
    },
    {
      _id: 4,
      title: "How to use React Query?",
      count: 10,
    },
    {
      _id: 5,
      title: "How to use React Query?",
      count: 48,
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "React",
      totalQuestion: 10,
    },
    {
      _id: 2,
      name: "Next.js",
      totalQuestion: 10,
    },
    {
      _id: 3,
      name: "React Query",
      totalQuestion: 10,
    },
    {
      _id: 4,
      name: "Node.js",
      totalQuestion: 10,
    },
    {
      _id: 5,
      name: "Javascript",
      totalQuestion: 10,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="m-2">
        <h3 className="h3-bold text-dark200_light900">Top Questions </h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                className="invert-colors"
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="h3-bold text-dark200_light900 mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags </h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestion={tag.totalQuestion}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}
