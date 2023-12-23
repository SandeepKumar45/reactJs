import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)
  function addValue(){
    if (counter<20) {
      setCounter(counter+1)
    }
    console.log(counter);
  }
  function removeValue(){
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>counter value - {counter}</h2>
   <button onClick={addValue}>Add value {counter}</button>
   <br />
   <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
