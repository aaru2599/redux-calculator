import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './User.Slice'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {PropagateLoader} from "react-spinners"
import { Link } from 'react-router-dom'

const UserLayout = () => {
  const users = useSelector((state) => state.myUser)
  console.log(users.data);
  const dispatcher = useDispatch()
  // console.log("users", users);
  useEffect(() => {
    dispatcher(getUser())
    
  }, [dispatcher])
  return (
    <div>
      <div  className='d-flex mt-4 justify-content-center'>
        {users.isLoading && <PropagateLoader color="#36d7b7" />}
      </div>
      
     {Array.isArray(users.data)&&
      
      <ul>
         {
              users.data.map((user) => {
              return (
                
                <tr>
                  <Link to={`/${user.id}`}>
                  <th  scope="row" key={user.id}>{user.name}</th>
                
                </Link>
                </tr>
              )
            })
          }
      </ul>   
     }
    </div>
  )
}

export default UserLayout