import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems() {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className="my-20 mx-36 ">
            <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-16 py-4 text-[#454545] text-[15px] font-semibold ">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[2px] bg-[#e2e2e2] border-none '/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-16 py-4 text-[#454545] text-[15px] font-medium  ">
                            <img src={e.image} alt="" className='h-16' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='w-12 h-10 border border-[#ebebeb] bg-[#fff] '>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" className='w-3 mx-5 cursor-pointer
                            ' onClick={() => removeFromCart(e.id)} />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="flex my-20 ">
                <div className="flex flex-1 flex-col mr-[200px] gap-10  ">
                    <h1 className='text-2xl font-bold'>cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-3 ">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 font-semibold ">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-52 h-12 outline-none border-none bg-red-500 text-white text-sm font-semibold cursor-pointer '>PROCEED TO CHECKOUT</button>
                </div>
                <div className="flex-1 text-sm font-medium ">
                    <p className='text-[#555]
                    '>If you have a promo code, Enter it here</p>
                    <div className="w-[400px] h-14 bg-[#eaeaea] mt-3 pl-5 flex items-center  ">
                        <input type="text" placeholder='promo code' className='border-none outline-none bg-transparent text-sm w-[300px] h-12  ' />
                        <button className='w-40 h-[53px] text-sm bg-black text-white cursor-pointer '>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems