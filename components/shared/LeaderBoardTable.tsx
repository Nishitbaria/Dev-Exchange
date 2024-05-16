import Image from 'next/image';
import React from 'react';

interface LeaderBoardData {
    rank: number;
    name: string;
    score: number;
    picture:string
  }
  
const LeaderBoardTable: React.FC<{ leaderData: LeaderBoardData[] }> = ({ leaderData }) => {
return (
    <div className="bg-black shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-900 px-4 py-2 flex">
            <div className="w-1/12 font-bold text-white">Rank</div>
            <div className="w-1/12 font-bold text-white">Picture</div>
            <div className="w-6/12 font-bold text-white">Name</div>
            <div className="w-5/12 font-bold text-right text-white">Reputation</div>
        </div>
        {leaderData.map((entry) => (
            <div key={entry.rank} className="px-4 py-2 flex border-b border-gray-800">
                <div className="w-1/12 text-white">{entry.rank}</div>
                <div className="w-1/12">
                    <Image alt='profile' width={30} height={20} src={entry.picture} className="rounded-full" />
                </div>
                <div className="w-6/12 text-white">{entry.name}</div>
                <div className="w-5/12 text-right text-orange-500">{entry.score}</div>
            </div>
        ))}
    </div>
);
};

export default LeaderBoardTable;

