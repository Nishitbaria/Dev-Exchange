"use client";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LeaderBoardData {
  rank: number;
  name: string;
  score: number;
  picture: string;
  clerkId:string
}


const PaginationLeaderBoard = ({
    currentPage,
    totalPages,
    paginate,
  }: {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
  }) => {
    return (
      <div className="flex justify-center py-4">
        <nav>
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
                className={`flex items-center rounded-md bg-gray-800 px-2 py-1 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:px-4 md:py-2 ${
                  currentPage === 1 ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <ChevronsLeftIcon className="mr-1 size-4" /> <span className="hidden md:inline">First</span>
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center rounded-md bg-gray-800 px-2 py-1 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:px-4 md:py-2 ${
                  currentPage === 1 ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <ChevronLeftIcon className="mr-1 size-4" /> <span className="hidden md:inline">Prev</span>
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <div className="rounded-md bg-gray-300 px-2 py-1 text-gray-800 md:px-4 md:py-2">
                Page {currentPage} of {totalPages}
              </div>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center rounded-md bg-gray-800 px-2 py-1 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:px-4 md:py-2 ${
                  currentPage === totalPages ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <span className="hidden md:inline">Next</span> <ChevronRightIcon className="ml-1 size-4" />
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
                className={`flex items-center rounded-md bg-gray-800 px-2 py-1 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:px-4 md:py-2 ${
                  currentPage === totalPages ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <span className="hidden md:inline">Last</span> <ChevronsRightIcon className="ml-1 size-4" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };


  const LeaderBoardTable: React.FC<{ leaderData: LeaderBoardData[] }> = ({ leaderData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(10);
  
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = leaderData.slice(indexOfFirstEntry, indexOfLastEntry);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    const totalPages = Math.ceil(leaderData.length / entriesPerPage);
  
    const router = useRouter();
  
    return (
      <div className="overflow-hidden rounded-lg bg-black shadow-md">
        <div className="flex flex-wrap items-center justify-between bg-gray-900 p-2">
          <div className="w-1/12  pr-2 text-xs font-bold text-white sm:pr-0">Rank</div>
          <div className="w-2/12 pl-4 text-xs font-bold text-white sm:pl-0">Picture</div>
          <div className="w-6/12 pl-8 text-xs font-bold text-white">Name</div>
          <div className="w-3/12 text-right text-xs font-bold text-white">Reputation</div>
        </div>
  
        {currentEntries.map((entry) => (
          <div key={entry.rank} className="flex flex-wrap items-center justify-between border-b border-gray-800 px-4 py-2">
            <div className="w-1/12 text-white">{entry.rank}</div>
            <div className="relative size-8 sm:mr-10 lg:mr-16">
              <Image alt="profile" layout="fill" src={entry.picture} className="rounded-full object-cover" />
            </div>
            <div onClick={() => { router.push(`/profile/${entry.clerkId}`) }} className="w-6/12 cursor-pointer pl-[0.8rem] text-sm text-white sm:pl-0 sm:text-base">{entry.name}</div>
            <div className="w-3/12 text-right text-orange-500">{entry.score}</div>
          </div>
        ))}
        
        <PaginationLeaderBoard
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    );
  };
  

export default LeaderBoardTable;