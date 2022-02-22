import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListUsers({ usersData, handleSearch }) {
  const [searchData, setSearchData] = useState();
  const navigate = useNavigate();
  //search for the user data
  const searchFunction = (e) => {
    let searchValue = e.target.value;
    setSearchData(searchValue);
    console.log(searchData);
    if (searchData !== "") {
      handleSearch(searchData);
      setSearchData("");
    } else navigate("./pages/ListUsers");
  };
  return (
    <div className="container">
      <h1>List of Users</h1>
      <br />
      <br />
      <form className="mb-5" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="form-control"
          name="usersearch"
          placeholder="Search here..."
          onChange={searchFunction}
        />
      </form>
      <table className="table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        {usersData.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <td> </td>
                <td> {user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.Company}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
