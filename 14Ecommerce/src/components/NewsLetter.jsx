import React from 'react'

function NewsLetter() {
    return (
        <div className="w-[75%] h-[40vh] flex flex-col justify-center items-center m-auto px-[80px] mb-[150px] bg-gradient-to-b from-[#fde1ff] from-[0%] to-[#e1ffea22] to-[60%]  ">
            <h1 className='text-[#454545] text-[45px] font-semibold '>Get Exclusive Offers On Your Email</h1>
            <p className='text-[#454545] text-[20px] my-4 '>Subscribe to our newsletter and stay updated</p>
            <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#cbcbcb] '>
                <input type="email" placeholder='Your Email id' className='w-[500px] ml-[30px] border-none text-[#616161] text-[16px] outline-none ' />
                <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer '>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter