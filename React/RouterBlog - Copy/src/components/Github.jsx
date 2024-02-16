import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/veershah-sh')
    //     .then(response => response.json())
    //     .then(data => {setData(data)})
    // }, [])
    const data = useLoaderData()
  return (
    <div>
        <h1 className='text-center text-3xl text-orange-700 p-5'>Github Followers : {data.followers} </h1>
        <h1 className='text-center text-3xl text-orange-700 p-5'>Github Repository : {data.public_repos} </h1>
        <img src={data.avatar_url} alt="Github profile image" width={250}/>
    </div>
  )
}

export default Github

export const githubData = async () => {
    const response = await fetch('https://api.github.com/users/veershah-sh')
    return response.json()
}