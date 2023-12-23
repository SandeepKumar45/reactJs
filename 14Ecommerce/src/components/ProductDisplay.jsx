import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'

function ProductDisplay(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="flex mx-[100px]">
        <div className="flex gap-3">
            <div className="flex flex-col gap-3 ">
                <img src={product.image} alt="" className='h-[115px] w-[180px]'/>
                <img src={product.image} alt="" className='h-[115px] w-[180px]'/>
                <img src={product.image} alt="" className='h-[115px] w-[180px]'/>
                <img src={product.image} alt="" className='h-[115px] w-[180px]'/>
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className='w-[656px] h-[500px] '/>
            </div>
        </div>
        <div className="mx-[50px] flex flex-col">
            <h1 className='text-[#3d3d3d] text-[35px] font-bold '>{product.name}</h1>
            <div className="flex items-center my-[5px] gap-1 text-[#1c1c1c] text-[15px] ">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="flex my-[15px] gap-5 text-[20px] font-bold ">
                <div className="text-[#818181] line-through ">${product.old_price}</div>

                <div className="text-red-500">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, Worn as an undershit or outer grament.
            </div>
            <div className="productdisplay-right-size">
                <h1 className='mt-[20px] text-[#656565] text-[17px] font-semibold'>Select Size</h1>
                <div className="flex my-[15px] gap-4 ">
                    <div className='py-[10px] px-[17px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer '>S</div>
                    <div className='py-[10px] px-[17px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer '>M</div>
                    <div className='py-[10px] px-[17px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer '>L</div>
                    <div className='py-[10px] px-[17px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer '>XL</div>
                    <div className='py-[10px] px-[17px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer '>XXL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id)} className='py-[17px] px-[35px] w-[170px] text-[15px] font-semibold text-white bg-red-500 mb-5 border-none outline-none cursor-pointer '>ADD TO CART</button>
            <p className='mt-2'><span className='font-semibold'>Category :</span> Women , T-Shirt, Crop Top</p>
            <p className='mt-2'><span className='font-semibold'>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay