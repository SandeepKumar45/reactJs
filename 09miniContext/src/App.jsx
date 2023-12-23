import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <h1>React Conext Api</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
