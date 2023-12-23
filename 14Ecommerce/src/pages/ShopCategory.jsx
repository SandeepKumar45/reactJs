import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item'

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className='block my-[30px] mx-auto w-[80%] '/>
      <div className="flex mx-[155px] justify-between items-center">
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="py-[8px] px-[15px] rounded-[40px] border border-[#888] flex items-center gap-1">
          <p>Sort by</p>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-[20px] grid grid-cols-4 gap-8 w-[80%] mx-auto">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return <div key={item.id}>
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          }
          else{
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory