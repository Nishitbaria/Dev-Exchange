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
            fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=10`)
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
                            className="card-wrapper  p-8 rounded-lg shadow-lg mb-4"
                            key={repo.id}
                        >
                            <div className="flex items-center mb-3">
                          
                              <div>
                                    <h1 className="sm:text-xs lg:text-xl font-semibold">
                                        {repo.name}
                                    </h1>
                                    <p className="text-gray-200">{repo.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-start mt-10">
                                <a
                                    href={repo.html_url.toString()} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex  "
                                >
                                    <img
                                    src={repo.owner.avatar_url}
                                    alt={repo.owner.login}
                                    className="w-6 h-6 rounded-full mr-3"
                                />
                                    <h1 className="">{
                                        repo.owner.login 
                                    }/{repo.name}</h1>

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
