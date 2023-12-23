import React from 'react'
import { Link } from 'react-router-dom'

function Item(item) {
    return (
        <div className='w-[250px] hover:scale-[1.05] duration-[0.6s]'>
            <Link to={`/product/${item.id}`}><img onClick={window.scrollTo(0,0)} src={item.image} alt=""/></Link>
            <p className='my-[6px]'>{item.name}</p>
            <div className="flex gap-5 ">
                <div className="text-[#374151] text-[18px] font-semibold ">
                    ${item.new_price}
                </div>
                <div className="text-[#8c8c8c] text-[18px] font-medium line-through ">
                    ${item.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item