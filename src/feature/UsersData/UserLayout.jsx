import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './User.Slice'

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
      {/* <h1 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        My Users {users.isLoading && "UserLoading..."}
      </h1> */}
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(users.data) && users.data.map((user) => {
              return (
                <tr>
                  <th scope="row" key={user.id}>{user.name}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserLayout