import React, { useState } from "react";


export default function ListUsers({ usersData }) {
  const [searchData, setSearchData] = useState("");

  //search for the user data
  const handleSearch = (listData, searchValue) => {
    let filteredData = [];
    if (!searchValue.trim()) {
      filteredData = listData;
    } else {
      filteredData = listData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.id.includes(searchValue)
      );
    }
    return filteredData;
  };
  return (
    <div className="container">
      <h1>List of Users</h1>
      <br />
      <br />

      <input
        type="search"
        className="form-control mb-3"
        name="usersearch"
        placeholder="Search here..."
        onChange={(e) => setSearchData(e.target.value)}
      />

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
        {handleSearch(usersData, searchData).map((user) => {
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
