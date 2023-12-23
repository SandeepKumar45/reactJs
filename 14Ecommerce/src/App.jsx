import './App.css'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import ShopContextProvider from './context/ShopContext'

function App() {

  return (
    <>
    <ShopContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ShopContextProvider>
    </>
  )
}

export default App
