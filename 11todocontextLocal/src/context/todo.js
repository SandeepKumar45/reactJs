import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ]
})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=> useContext(TodoContext)