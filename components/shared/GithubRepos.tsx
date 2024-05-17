'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Url } from "url";

interface Props {
    username: string;
}

interface Repo {
    id: number;
    name: string;
    description: string;
    owner: {
        avatar_url: string;
        login: string;
    };
    html_url: Url;
}

const GithubRepos = ({ username }: Props) => {
    const [repos, setRepos] = useState<Repo[]>([]);

    const router=useRouter();

    useEffect(() => {
        if(username){
            fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&per_page=10`)
            .then(res => res.json())
            .then(data => setRepos(data.items));
        }
    }, [username]);

    return (
        <div className="text-white p-6 rounded">
            {username ?  (
                <>
                    {repos.map((repo) => (
                        <div
                            className="bg-gray-700 p-4 rounded-lg shadow-lg mb-4"
                            key={repo.id}
                        >
                            <div className="flex items-center mb-3">
                                <img
                                    src={repo.owner.avatar_url}
                                    alt={repo.owner.login}
                                    className="w-12 h-12 rounded-full mr-3"
                                />
                                <div>
                                    <h1 className="sm:text-xs lg:text-xl font-semibold">
                                        {repo.name}
                                    </h1>
                                    <p className="text-gray-200">{repo.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <a
                                    href={repo.html_url.toString()} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFFFFF"
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        ></path>
                                    </svg>
                                    Go To Repo
                                </a>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-4">Add Github User</h1>
                <div className="flex items-center">
                   
                    <button onClick={()=>{
                        router.push('/profile/edit')
                    }} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                        Add Username
                    </button>
                </div>
            </div>
            
            )}
        </div>
    );
};

export default GithubRepos;
