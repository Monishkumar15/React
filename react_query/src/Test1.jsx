import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const Test1 = () => {
  const [url, setUrl] = useState("");
  const apiCall = async ({ queryKey }) => {
    const url = queryKey[1];
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error("Failed to fetch GitHub repo");
    }
    console.log("API call");
    
    return res.json();
  };
  const repo1 = useQuery({queryKey : ["githubData",
    url],
    queryFn: apiCall,}
  );
  const repo2 = useQuery({queryKey : ["githubData",
    "https://api.github.com/repos/Monishkumar15/todo-app-backend-typeORM-RoleBased"],
    queryFn: apiCall,}
  );

  if(repo2.isLoading){
    return <h1>Loading...</h1>
  }

  if( repo2.error){
    return <h1>An error occured Error: {repo2.error?.message}</h1>
  }
  // console.log(error)
  // console.log(data)

  return (
    <div>
      {repo1.data && <div>
      <h2>GitHub {repo1.data.name} Repo Data</h2>
      <p>Repo Name: {repo1.data.name}</p>
      <p>Repo Stars: {repo1.data.stargazers_count}</p>
      <p>Repo size: {repo1.data.size}</p>
    </div>}
    <div>
      <h2>GitHub {repo2.data.name} Repo Data</h2>
      <p>Repo Name: {repo2.data.name}</p>
      <p>Repo Stars: {repo2.data.stargazers_count}</p>
      <p>Repo size: {repo2.data.size}</p>
    </div>
    <button
    onClick={()=>{
      setUrl("https://api.github.com/repos/Monishkumar15/React")
    }}>
      Update
    </button>
    </div>
  );
}

export default Test1