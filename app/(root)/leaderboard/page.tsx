import React from 'react';
import LeaderBoardTable from '@/components/shared/LeaderBoardTable';
import User from '@/database/user.model';

interface LeaderBoardData {
  rank: number;
  name: string;
  score: number;
  picture:string
}

const LeaderBoard: React.FC =async () => {
  let leaderData: LeaderBoardData[] = [];


   
  
        const users = await User.find();
        console.log(users)
        leaderData = users.map((user, index) => ({
            picture:user.picture,
          rank: index + 1,
          name: user.name,
          score: user.reputation
        }));



        leaderData.sort((a, b) => b.score - a.score);

        console.log(leaderData)
      




  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Leaderboard</h2>
      <LeaderBoardTable leaderData={leaderData} />
    </div>
  );
};

export default LeaderBoard;
