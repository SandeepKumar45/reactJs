import { useState,useRef } from "react"
import { addTodo,updateTodo } from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux'
import { Todos } from "./Todos"

export function AddTodo() {
    const [editable, setEditable] = useState(false)
    const [input, setInput] = useState('')
    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input) {
            dispatch(addTodo(input))
            setInput('')
        }
        else {
            alert('Add Todo')
        }
    }

    const[todoInfo,setTodoInfo] = useState(null)
    function updateTodoHandler(todo) {
        setTodoInfo(todo)
        setInput(todo.text)
        setEditable(true)
        inputRef.current.focus()
    }

    const addUpdateHandler = () =>{
        dispatch(updateTodo({id:todoInfo.id,text:input}))
        setTodoInfo(null)
        setInput('')
        setEditable(false)
    }
    return (
        <>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter todos ..."
                    ref={inputRef}
                    className="w-3/4 max-w-md py-1 px-2 text-xl outline-none font-semibold rounded-sm mb-10" />

                {editable ? <button onClick={addUpdateHandler}
                    className="text-white font-bold bg-yellow-500 text-xl py-1 px-3 ml-2 rounded-md"
                >UPDATE</button> : <button onClick={addTodoHandler}
                    className="text-white font-bold bg-blue-700 text-xl py-1 px-3 ml-2 rounded-md"
                >ADD</button>}
            <Todos update={updateTodoHandler} />
        </>
    )
}