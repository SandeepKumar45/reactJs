import { useParams } from "react-router-dom"

function User(){
    const {id} = useParams()
    return(
        <h1 className="text-3xl font-semibold p-4">User: {id}</h1>
    )
}

export default User