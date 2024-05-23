import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { getJoinedDate } from "@/lib/utils";
import ProfileLink from "@/components/shared/ProfileLink";
import Stats from "@/components/shared/Stats";
import QuestionTab from "@/components/shared/QuestionTab";
import AnswersTab from "@/components/shared/AnswersTab";
import type { Metadata } from "next";
import GithubRepos from "@/components/shared/GithubRepos";

export const metadata: Metadata = {
  title: "Profile Page",
};

const Page = async ({ params, searchParams }: URLProps) => {
  const { userId: clerkId } = auth();
  const userInfo = await getUserInfo({ userId: params.id });

  const currentUserInfo = await getUserInfo({
    userId: clerkId ?? ''
  });

  const userInfoJson = JSON.stringify(userInfo);
  const currentUserInfoJson = JSON.stringify(currentUserInfo);

  return (
    <>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={userInfo?.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

        <div className="flex flex-col">
        <div className="mt-3">
            <h2 className="h2-bold text-dark100_light900">
              {userInfo.user.name}
            </h2>
            <p className="paragraph-regular text-dark200_light800">
              @{userInfo.user.username}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              {userInfo.user.portfolioWebsite && (
                <ProfileLink
                  imgUrl="/assets/icons/link.svg"
                  href={userInfo.user.portfolioWebsite}
                  title="Portfolio"
                />
              )}

            {userInfo.user.github && (
                <ProfileLink
                  imgUrl="/assets/icons/github.png"
                  href={`https://github.com/`+userInfo.user.github}
                  title="Github"
                />
              )}

              {userInfo.user.location && (
                <ProfileLink
                  imgUrl="/assets/icons/location.svg"
                  title={userInfo.user.location}
                />
              )}

              <ProfileLink
                imgUrl="/assets/icons/calendar.svg"
                title={getJoinedDate(userInfo.user.joinedAt)}
              />
            </div>

            <div className="flex items-center gap-5 mt-5">
              <p className="paragraph-medium text-dark200_light800">
                {userInfo.user.followers.length} Followers
              </p>
              <p className="paragraph-medium text-dark200_light800">
                {userInfo.user.following.length} Following
              </p>

              </div>
         
          </div>

          {userInfo.user.bio && (
              <p className="paragraph-regular text-dark400_light800 mt-8">
                {userInfo.user.bio}
              </p>
            )}
        </div>

        </div>

     

        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
          <SignedIn>
            {clerkId === userInfo.user.clerkId && (
              <Link href="/profile/edit">
                <Button className="paragraph-medium btn-secondary text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3">
                  Edit Profile
                </Button>
              </Link>
            )}

          </SignedIn>
        </div>
      </div>

      <Stats
        reputation={userInfo.reputation}
        totalQuestions={userInfo.totalQuestions}
        totalAnswers={userInfo.totalAnswers}
        badges={userInfo.badgeCounts}
        clerkId={clerkId}
        userInfo={userInfoJson}
        currentUserInfo={currentUserInfoJson}
      />

      <div className="mt-10 flex gap-10">
        <Tabs defaultValue="top-posts" className="flex-1">
          <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab">
              Top Posts
            </TabsTrigger>
            <TabsTrigger value="answers" className="tab">
              Answers
            </TabsTrigger>
            <TabsTrigger value="Github" className="tab">
              Github
            </TabsTrigger>
          </TabsList>
          <TabsContent value="top-posts">
            <QuestionTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
          <TabsContent value="answers" className="flex w-full flex-col gap-6">
            <AnswersTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
          <TabsContent value="Github" className="flex w-full flex-col gap-6">
           <GithubRepos  username={userInfo.user.github}/>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
