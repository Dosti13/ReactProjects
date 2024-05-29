import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Dosti13')
    //  .then(response => response.json())
    //  .then(data => {
    //     setData(data)
    //  })
    // }, [])
    
  return (
  <div className=' flex  justify-center'>
    <div className='text-center m-4  text-grey-800 p-4 text-3xl'>Github followers: {data.followers}
    <img className=' rounded-lg flex justify-center' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Dosti13')
  if(!response.ok){
    throw Error("some issue with api ");
  }
    return response.json()
}