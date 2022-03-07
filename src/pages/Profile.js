import React from "react";
import { Link} from "react-router-dom";
export default function Profile({ usersData,deleteHandler }) {
  return (
    <div className="container">
      <h1>Employee List</h1>
      <br />
      <div className="table-responsive-sm">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Profile</th>
            <th>Edit profile</th>
            <th>Delete</th>
          </tr>
        </thead>
        {usersData.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <td></td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Link key={user.id} to={`/pages/Profile/${user.id}`}>
                  <button>View</button>
                  </Link>
                </td>
                <td>
                  <Link key={user.id} to={`/pages/EditUser/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
                <td>
                 
                   <button onClick={()=>deleteHandler(user.id)}>Delete</button> 
                
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
    </div>
  );
}
