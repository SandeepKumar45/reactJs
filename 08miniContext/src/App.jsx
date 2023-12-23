import { useContext } from 'react'
import './App.css'
import Counter from "./components/Counter"
import { counterContext } from './context/Counter'


function App() {

  const counter = useContext(counterContext)
  console.log(counter);
  
  return (
    <>
     <h1>Count {counter.count} </h1>
     <Counter />
     <Counter />
     <Counter />
     <Counter />
    </>
  )
}

export default App
