import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is Lorem Ipsum?",
    tags: [
      { _id: "1", name: "lorem" },
      { _id: "2", name: "ipsum" },
      { _id: "3", name: "dolor" },
      { _id: "4", name: "sit" },
      { _id: "5", name: "amet" },
    ],
    author: {
      _id: "author1",
      name: "Nishitbaria",
      avatar: "url_to_author_avatar",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2023-08-01T18:30:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "1", name: "lorem" },
      { _id: "2", name: "ipsum" },
      { _id: "3", name: "dolor" },
      { _id: "4", name: "sit" },
      { _id: "5", name: "amet" },
    ],
    author: {
      _id: "author2",
      name: "Someone",
      avatar: "url_to_author_avatar",
    },
    upvotes: 10000000,
    views: 1000000,
    answers: [],
    createdAt: new Date("2023-08-01T18:30:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark200_light900  "> All Question </h1>

        <Link href="/question/1" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            {" "}
            Ask Question{" "}
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col  sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Globally"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Loping threw question  */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
