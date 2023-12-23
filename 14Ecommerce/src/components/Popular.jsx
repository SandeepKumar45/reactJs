import React from 'react'
import data_product from '../assets/data'
import Item from './Item'

function Popular() {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] ">
        <h1 className='text-[#171717] text-[50px] font-semibold '>POPULAR IN WOMEN</h1>
        <div className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] p-[2px] '></div>
        <div className="flex mt-[50px] gap-8 ">
            {data_product.map((item)=>{
                return <div key={item.id}>
                     <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </div>
            })}
        </div>
    </div>
  )
}

export default Popular