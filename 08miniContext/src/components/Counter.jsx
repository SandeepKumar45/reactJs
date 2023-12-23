import React , {useContext} from "react"
import { counterContext } from "../context/Counter"

function Counter(){
    const counter = useContext(counterContext)
    return(
        <>
        <button onClick={()=>{counter.setCount(counter.count+1)}}>Increment</button>
        <button onClick={()=>{counter.setCount(counter.count-1)}}>Decrement</button>
        </>
    )
}

export default Counter