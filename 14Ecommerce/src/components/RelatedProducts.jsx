import React from 'react'
import data_product from '../assets/data'
import Item from './Item'

function RelatedProducts() {
    return (
        <div className="flex flex-col items-center gap-2 h-[90vh] ">
            <h1 className='text-[#171717] text-[35px] font-semibold '>Related Products</h1>
            <hr className='w-[200px] h-1 rounded-[10px] bg-[#252525] '/>
            <div className="mt-10 flex gap-6 ">
                {data_product.map((item) => {
                    return <div key={item.id}>
                        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts