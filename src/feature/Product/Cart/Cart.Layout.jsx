import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateQuantity } from './Cart.Slice'

const CartLayout = () => {
  const cartList = useSelector((state) => state)
  const dispatch = useDispatch()
  // console.log("cartList", cartList);
  const cartData = cartList.myCart.data
  console.log("cartList.myCart", cartData);


  const onIncQuantity = (productId) => {
    const productToUpdate = cartData.find((item) => item.id === productId)
    if (productToUpdate) {
      dispatch(updateQuantity({ productId, quantity: productToUpdate.count + 1 }))
    }
  }

  const onDecQuantity = (productId) => {
    const productToUpdate = cartData.find((item) => item.id === productId);
    if (productToUpdate && productToUpdate.count > 0) {
      dispatch(updateQuantity({ productId, quantity: productToUpdate.count - 1 }));
    }
  }
  const onClickRemove = (productId) => {
    const removeProduct = cartData.find((item) => item.id === productId)
    console.log("removeProduct", removeProduct);
    dispatch(removeFromCart(removeProduct))


  }
  return (
    <div>
      <div>
        <h2>Cart Item</h2>
        <table class="table">
          {
            (cartData.length > 0) ? (
              <tbody>
                {
                  cartData.map((item) => {
                    return (
                      <tr>
                        <th scope="row"><img src={item.image} width={20} alt="" /></th>
                        <td>{item.title}</td>
                        <td>${item.price * item.count}</td>
                        <td className='d-flex gap-2'>
                          <button className='btn btn-danger' onClick={() => onDecQuantity(item.id)}>-</button>
                          <span className='fs-4 '>{item.count}</span>
                          <button className='btn btn-success' onClick={() => onIncQuantity(item.id)}>+</button> </td>
                        <button onClick={() => onClickRemove(item.id)}>Remove</button>



                      </tr>
                    )
                  })
                }
              </tbody>
            ) : <p>Please add product in cart</p>
          }


        </table>
      </div>
    </div >
  )
}

export default CartLayout