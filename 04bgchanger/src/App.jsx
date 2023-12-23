import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState("#ffffff");
  const hexCode = "0123456789ABCDEF"
  function bgcGenerator(){
    let bgc = "#"
    for (let i = 0; i < 6; i++) {
      bgc+= hexCode[(Math.floor(Math.random()*16))];
    }
    setColor(bgc);
  }
  return (
    <>
      <div 
      style={{backgroundColor:color}}
      className="h-[100vh] p-6 flex justify-center items-center ">
        <button className="text-white text-2xl font-bold bg-black p-2 rounded-lg "onClick={bgcGenerator}>Change BGC</button>
      </div>
    </>
  )
}

export default App
