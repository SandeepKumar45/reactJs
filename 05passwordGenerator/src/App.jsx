import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  document.body.style.backgroundColor = "black";

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "`~!@#$%^&*()_+-=[]{}\|?/><"
    }
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(generatePassword, [length, numAllowed, charAllowed]);

  const PasswordRef = useRef(null);

  return (
    <>
      <div className='bg-[#1E2434] max-w-lg py-8 px-5 rounded-lg mx-auto text-white'>

        <h1 className='text-white text-xl text-center mb-7'>Password Generator</h1>

        <div className='bg-red-600 w-full rounded-lg overflow-hidden flex mb-5 text-orange-600'>
          <input
            className='p-2 flex-1 outline-none'
            type="text" name="" id="" value={Password} ref={PasswordRef} readOnly/>

          <button 
          onClick={()=>{
            window.navigator.clipboard.writeText(Password)
            PasswordRef.current.select()
          }}
          className='bg-blue-600 py-2 px-4 text-white font-semibold'>copy</button>
        </div>

        <div className='flex items-center gap-x-3 text-orange-700 font-semibold'>

          <div className='flex items-center gap-x-1'>
            <input
              onChange={(e) => (setLength(e.target.value))}
              type="range" name="" id="" min={8} max={30} value={length} />
            <label>Length:{length}</label>
          </div>

          <div>
            <input
              onChange={()=>{
                setNumAllowed((prev)=>!prev)
              }}
              className='mr-1'
              type="checkbox" name="" id="" value={numAllowed} />
            <label>Numbers</label>
          </div>

          <div>
            <input
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
              className='mr-1'
              type="checkbox" name="" id="" value={charAllowed} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
