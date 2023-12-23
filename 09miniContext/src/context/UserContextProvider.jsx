import { useState } from "react"
import { userContext } from "./UserContext"


const UserContextProvider = (props)=>{
    const[user,setUser] = useState(null)
    return(
        <userContext.Provider value={{user,setUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider