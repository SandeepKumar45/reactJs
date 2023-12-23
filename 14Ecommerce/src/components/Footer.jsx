import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center gap-12 ">
            <div className="flex items-center gap-5 ">
                <img src={footer_logo} alt="" className='w-[60px]'/>
                <p className='text-[#383838] text-[27px] font-bold '>SHOPEEZY</p>
            </div>
            <ul className="flex list-none gap-12 text-[#252525] text-[15px]  ">
                <li className='cursor-pointer '>Company</li>
                <li className='cursor-pointer '>Products</li>
                <li className='cursor-pointer '>Offices</li>
                <li className='cursor-pointer '>About</li>
                <li className='cursor-pointer '>Contact</li>
            </ul>
            <div className="flex gap-5">
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] ">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] ">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] ">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[18px]  ">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7] '/>
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer