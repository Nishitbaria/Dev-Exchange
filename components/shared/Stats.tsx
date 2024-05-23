
"use client"
import { formatAndDivideNumber } from "@/lib/utils"
import { BadgeCounts } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { followUser } from "@/lib/actions/user.action";
import { usePathname } from "next/navigation";


interface StatsCardProps {
  imgUrl: string;
  value: number;
  title: string;
}

const StatsCard = ({ imgUrl, value, title }: StatsCardProps) => {
  return (
    <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-start gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200">
      <Image src={imgUrl} alt={title} width={40} height={50} />
      <div>
        <p className="paragraph-semibold text-dark200_light900">
          {value}
        </p>
        <p className="body-medium text-dark400_light700">{title}</p>
      </div>
    </div>
  )
}

interface Props {
  totalQuestions: number
  totalAnswers: number
  badges: BadgeCounts
  reputation: number
  clerkId?: any 
  userInfo: any,
  currentUserInfo:any

}

const Stats = ({ totalQuestions, totalAnswers, badges, reputation ,clerkId,userInfo,currentUserInfo}: Props) => {


    const pathname = usePathname()


    const parsedUserInfo = JSON.parse(userInfo);
    const parsedCurrentUserInfo = JSON.parse(currentUserInfo);

    console.log('parsed user info',parsedCurrentUserInfo)
    const isFollowing=parsedUserInfo.user.followers.includes(parsedCurrentUserInfo.user._id)
  

  const handleFollow = async () => {
    try {
      const res = await followUser({ currentUserId:parsedCurrentUserInfo.user._id,  UserToFollowId: parsedUserInfo.user._id, path: pathname});
     
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="mt-10">
      <h4 className="h3-semibold text-dark200_light900">Stats - {reputation}</h4>

            {
              clerkId !== parsedUserInfo.user.clerkId && (
                <Button onClick={handleFollow} className="paragraph-medium btn-secondary text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3">
                {
                  isFollowing ? "Unfollow" : "Follow"
                }
                </Button>
              )
            }

      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-evenly gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200">
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700">Questions</p>
          </div>
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatAndDivideNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700">Answers</p>
          </div>
        </div>

        <StatsCard 
          imgUrl="/assets/icons/gold-medal.svg"
          value={badges.GOLD}
          title="Gold Badges"
        />
        

        <StatsCard 
          imgUrl="/assets/icons/silver-medal.svg"
          value={badges.SILVER}
          title="Silver Badges"
        />

        <StatsCard 
          imgUrl="/assets/icons/bronze-medal.svg"
          value={badges.BRONZE}
          title="Bronze Badges"
        />
      </div>
    </div>
  )
}

export default Stats