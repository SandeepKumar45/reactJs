import React,{useContext} from "react"
import { useState } from "react"
import { userContext } from "../context/UserContext"

function Login(){
    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    const user = useContext(userContext)


    function handleSubmit(e){
        e.preventDefault()
        if (!username || !password) {
            user.setUser(null)
        }
        else{
            user.setUser({username,password})
        }
    }

    return(
        <>
        <h3>Login</h3>
        <input type="text"
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
         placeholder="username" className="babu"/>
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="password" className="babu"/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login