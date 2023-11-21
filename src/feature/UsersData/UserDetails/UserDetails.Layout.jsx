import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { getUser } from "../User.Slice";
import { useParams } from "react-router-dom";
import { getUserDetails } from "./UserDetails.Slice";


const UserDetailsLayout = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.myUserDetails)
  console.log("userData", users);
  const dispatcher = useDispatch()
  // console.log("users", users);
  useEffect(() => {
    dispatcher(getUserDetails({ id }))

  }, [dispatcher, id])
  console.log("usersData",  users?.data );
  const user= users?.data
  console.log("id", { id });
  return (
    <div>
      
      <div  className='d-flex justify-content-center'>
        {users.isLoading && <PropagateLoader color="#36d7b7" />}
      </div>
      
    
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
             
             
                
                <tr>
                  <th  scope="row" key={user?.id}>{user?.name}</th>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.website}</td>
                  <td>{user?.company.name}</td>
                </tr>
             
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserDetailsLayout