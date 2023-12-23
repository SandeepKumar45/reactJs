import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>(
    //         response.json()
    //     ))
    //     .then((response)=>(
    //         setData(response)
    //     ))
    // },[])
    return(
        <>
        <h1 className="text-5xl p-8">Followers: {data.followers}</h1>
        <img className="w-60 h-60 mx-auto" src={data.avatar_url} alt="" />
        </>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response
}