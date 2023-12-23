import React from 'react'
import new_collection from '../assets/new_collections'
import Item from './Item'

function NewCollections() {
  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px] ">
        <h1 className='text-[#171717] text-[50px] font-semibold'>NEW COLLECTIONS</h1>
        <div className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] p-[2px] '></div>
        <div className="grid grid-cols-4 mt-[50px] gap-8 ">
            {new_collection.map((item)=>{
                return <div key={item.id}>
                <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           </div>
            })}
        </div>
    </div>
  )
}

export default NewCollections