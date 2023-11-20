import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './User.Slice'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {PropagateLoader} from "react-spinners"

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
      <div  className='d-flex justify-content-center'>
        {users.isLoading && <PropagateLoader color="#36d7b7" />}
      </div>
      
     {Array.isArray(users.data)&&
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {
              users.data.map((user) => {
              return (
                <tr>
                  <th  scope="row" key={user.id}>{user.name}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>}
    </div>
  )
}

export default UserLayout