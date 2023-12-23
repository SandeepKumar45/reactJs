import { useContext } from "react"
import { userContext } from "../context/UserContext"

function Profile(){
    const userData = useContext(userContext)
    console.log(userData);
    console.log(userData.user);
    if (!userData.user) return <div>please login</div>

   return <div>Welcome {userData.user.username}</div>
}

export default Profile