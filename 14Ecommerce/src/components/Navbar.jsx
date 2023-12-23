import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

function Navbar() {
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='flex justify-around p-2 shadow-lg'>
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
          <p className='text-[30px] font-semibold'>Shopeezy</p>
        </div>
      </Link>
      <ul className='flex items-center list-none gap-12 text-[#626262] text-lg font-medium'>
        <NavLink to="/" className={({isActive})=>(isActive ? "border-b-[3px] border-orange-600 pb-1" : null)}>Shop</NavLink>
        <NavLink to="/mens" className={({isActive})=>(isActive ? "border-b-[3px] border-orange-600 pb-1" : null)}>Men</NavLink>
        <NavLink to="/womens" className={({isActive})=>(isActive ? "border-b-[3px] border-orange-600 pb-1" : null)}>Women</NavLink>
        <NavLink to="/kids" className={({isActive})=>(isActive ? " border-b-[3px] border-orange-600 pb-1 " : null)}>Kids</NavLink>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="/login"><button className='w-36 h-14 outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]'>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className='w-6 h-6 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-xl text-sm bg-red-700 text-white'><Link to="/cart">{getTotalCartItems()}</Link></div>
      </div>
    </div>
  )
}

export default Navbar