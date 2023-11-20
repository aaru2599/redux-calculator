import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNasaData } from './NasaData.Slice';

const NasaDataLayout = () => {
    const nasaDatas = useSelector((state) => state.myNasaData)
    console.log("nasaDatas", nasaDatas);
    const dispatcher = useDispatch()
    useEffect(() => {
        dispatcher(getNasaData())
    }, [dispatcher])
    return (
        <div>
            <div>
                {nasaDatas.isLoading && "Loading..."}
            </div>
            {nasaDatas?.data?.products&&<table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Title </th>
                        <th scope="col">Description</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Array.isArray(nasaDatas?.data?.products) && nasaDatas.data.products.map((item) => {
                            return <tr key={item.id}>
                                <th scope="row">{item.title}</th>
                                <td>{item.description}</td>
                                <td>{item.brand}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td><img className='border rounded' src={item.thumbnail} width={100}height={100} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>}
        </div>

    )
}

export default NasaDataLayout