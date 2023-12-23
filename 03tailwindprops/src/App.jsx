import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-yellow-600 p-3 rounded-md mb-5">Hello Babuni</h1>
      <Card userName="Babu" btnText="Click Me"/>
      <Card userName="Pandu" btnText="Visit Profile"/>
    </>
  )
}

export default App
