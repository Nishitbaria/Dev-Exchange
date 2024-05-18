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
      <div className="py-4 flex justify-center">
        <nav>
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  currentPage === 1 ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <ChevronsLeftIcon className="h-4 w-4 mr-1" /> <span className="hidden md:inline">First</span>
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  currentPage === 1 ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <ChevronLeftIcon className="h-4 w-4 mr-1" /> <span className="hidden md:inline">Prev</span>
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <div className="px-2 py-1 md:px-4 md:py-2 rounded-md bg-gray-300 text-gray-800">
                Page {currentPage} of {totalPages}
              </div>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  currentPage === totalPages ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <span className="hidden md:inline">Next</span> <ChevronRightIcon className="h-4 w-4 ml-1" />
              </button>
            </li>
            <li className="mb-2 md:mb-0">
              <button
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                  currentPage === totalPages ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <span className="hidden md:inline">Last</span> <ChevronsRightIcon className="h-4 w-4 ml-1" />
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
      <div className="bg-black shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-900 px-4 py-2 flex flex-wrap items-center justify-between">
          <div className="w-1/12  text-xs font-bold text-white">Rank</div>
          <div className="w-2/12 text-xs font-bold text-white">Picture</div>
          <div className="w-6/12 text-xs font-bold text-white">Name</div>
          <div className="w-3/12 text-xs font-bold text-right text-white">Reputation</div>
        </div>
  
        {currentEntries.map((entry) => (
          <div key={entry.rank} className="px-4 py-2 flex flex-wrap items-center justify-between border-b border-gray-800">
            <div className="w-1/12 text-white">{entry.rank}</div>
            <div className="w-2/12">
              <Image alt="profile" width={30} height={30} src={entry.picture} className="rounded-full" />
            </div>
            <div onClick={() => { router.push(`/profile/${entry.clerkId}`) }} className="w-6/12 text-white cursor-pointer">{entry.name}</div>
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