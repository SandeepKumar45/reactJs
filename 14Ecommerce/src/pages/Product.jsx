import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ProductDisplay from '../components/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts'


function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id == Number(productId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product