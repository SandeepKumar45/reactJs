import React from 'react'

function DescriptionBox() {
  return (
    <div className="my-16 mx-24 ">
        <div className="flex">
            <div className="flex justify-center items-center text-[15px] font-semibold w-36 h-14 border border-[#d0d0d0] ">Description</div>
            <div className="flex justify-center items-center text-[15px] font-semibold w-36 h-14 border border-[#d0d0d0] bg-[#FBFBFB] text-[#555] ">Reviews (122)</div>
        </div>
        <div className="flex flex-col gap-5 border border-[#D0D0D0] p-8 pb-16 ">
            <p>An e-commerce website is an online platform that faciliates buying and selling of products or services over the internet. it serves as a virtual marketplace where bussinesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
            <p>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any avaliable variations (e.g., sizes,colors). Each product usually has its own dedicated page with relevant information
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox