import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

function Breadcrumb(props) {
    const {product} = props
  return (
    <div className="flex items-center gap-2 text-[#5e5e5e] text-[16px] font-bold my-[40px] mx-[140px] capitalize ">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb