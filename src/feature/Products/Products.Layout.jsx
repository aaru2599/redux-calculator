import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from './Product.Slice';

const ProductsLayout = () => {
  const products = useSelector((state) => state.myProducts)
  // console.log("products", products);
  const dispatcher = useDispatch()


  useEffect(() => {
    dispatcher(getProduct())
  }, [dispatcher])
  // console.log("products", products);

  return (
    <div>
     <ul>
     {
        Array.isArray(products.data)&&products.data.map((product)=>{
          return <li key={product.id}>{product.title}</li>
        })
      }
     </ul>
    </div>
  )
}

export default ProductsLayout