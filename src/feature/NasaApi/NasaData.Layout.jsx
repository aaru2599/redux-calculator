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
            {nasaDatas?.data?.photos&&<table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Id </th>
                        <th scope="col">Camera Name</th>
                        <th scope="col">Rover Name</th>
                        <th scope="col">Rover Status</th>
                        <th scope="col">Earth Date</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Array.isArray(nasaDatas?.data?.photos) && nasaDatas.data.photos.map((item) => {
                            return <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                                <td>{item.rover.status}</td>
                                <td>{item.earth_date}</td>
                                {/* <td><img className='border rounded' src={item.img_src} width={100}height={100} /></td> */}
                            </tr>
                        })
                    }
                </tbody>
            </table>}
        </div>

    )
}

export default NasaDataLayout