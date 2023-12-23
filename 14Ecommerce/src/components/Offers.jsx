import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

function Offers() {
    return (
        <div className="w-[75%] h-[60vh] flex m-auto px-[80px] mb-[150px] bg-gradient-to-b from-[#fde1ff] from-[0%] to-[#e1ffea22] to-[60%]  ">
            <div className="flex flex-1 flex-col justify-center">
                <h1 className='text-[#171717] text-[60px] font-semibold '>Exclusive</h1>
                <h1 className='text-[#171717] text-[60px] font-semibold'>Offers For You</h1>
                <p className='text-[#171717] text-[22px] font-semibold '>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer '>Check Now</button>
            </div>
            <div className="flex flex-1 items-center justify-end pt-[50px] ">
                <img src={exclusive_image} alt="" className='w-[300px] ' />
            </div>
        </div>
    )
}

export default Offers