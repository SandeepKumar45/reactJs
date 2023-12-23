import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

function Hero() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#fde1ff] from-10% to-[#e1ffea22] flex">
            <div className="flex flex-1 flex-col justify-center gap-5 pl-[180px] leading-[1.1] ">
                <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center gap-5">
                        <p className='text-[#171717] text-[70px] font-bold'>new</p>
                        <img src={hand_icon} alt="" className='w-[105px]' />
                    </div>
                    <p className='text-[#171717] text-[70px] font-bold'>collections</p>
                    <p className='text-[#171717] text-[70px] font-bold'>for everyone</p>
                </div>
                <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium ">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={hero_image} alt="" className='w-[70%]' />
            </div>
        </div>
    )
}

export default Hero