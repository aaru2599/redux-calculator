import React from 'react'
import { useSelector } from 'react-redux'

// import { decrement, increment } from "./Counter.Slice";
const Counter = () => {
    const globalState = useSelector((state) => state)
    console.log("counterState", globalState);
    console.log("globalState.arvindProduct.data", globalState.arvindProduct.data);
    const myProducts = globalState.arvindProduct.data
    console.log("myProducts", myProducts);
    return (
        <div>

            <h3>Counter: {globalState.arvindCounter.value}</h3>
            <h3>Calculator: {globalState.arvindCalculator.value}</h3>
            <div className='d-flex flex-wrap'>
                {myProducts.map((item) => 
                    <div className='pt-3 col-12 col-sm-6 col-md-4 col-lg-3' key={item.id}>
                        <div className='card' >
                            <img src={item.image} className='card-img-top ' height={300}  alt={item.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text'>{item.description}</p>
                                <p className='card-text'>Price: ${item.price}</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-primary'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Counter