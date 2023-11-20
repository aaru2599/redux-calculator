import React, { useEffect, useState } from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
import { addToCart } from './Cart/Cart.Slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((data) => setProducts(data));
    }, [])
    console.log("products", products);
    const onAddToCart = (product) => {
        dispatch(addToCart(product))
      console.log("product",products);


    }
    return (
        <div>
            <h2>Products</h2>
            <div className='product-list'>
                {
                    products.map((item) => {
                        return (
                            <div class='item-card' key={item.id}>
                                <img class='input-image 'style={{width:"100px",marginLeft:"auto",marginRight:"auto"}} src={item.image} alt="" />
                                <div >
                                    <p>{item.title}</p>
                                    <button  onClick={() => onAddToCart(item)}>Add To Cart</button>
                                    
                                </div>
                            </div>


                        )
                    })
                }
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Product