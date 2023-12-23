import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './context/todo'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => (item.id == id ? { ...item, todo } : item)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id != id))
  }

  const toogleComplete = (id) => {
    localStorage.setItem("babu","babuni")
    setTodos((prev) => prev.map((item) => item.id == id ? { ...item, completed:!item.completed } : item))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(localStorage.getItem("todos"));
    if (todos && todos.length>0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  console.log(localStorage.getItem("babu"));

  return (
    <TodoProvider value={{ setTodos, todos, updateTodo, deleteTodo, toogleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div
                className='w-full'
                key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
