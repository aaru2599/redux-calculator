import React from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserDetailsLayout from '../UserDetails/UserDetails.Layout'
import UserLayout from '../UserLayout'
import NasaDataLayout from '../../NasaApi/NasaData.Layout'

const Routes = () => {
  const myRoutes=createBrowserRouter([
{
  path:"/",
  element:<UserLayout/>
},
{
  path:"/nasa",
  element:<NasaDataLayout/>
},
{
path:"/:id",
element:<UserDetailsLayout/>

}
  ])
  return (
    <div>
      <RouterProvider router={myRoutes}/>
    </div>
  )
}

export default Routes