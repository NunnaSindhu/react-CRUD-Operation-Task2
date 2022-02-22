import React from "react";
import { useParams } from "react-router-dom";
export default function ViewProfile({ getData }) {
  const { id } = useParams();
  console.log(id);
  const empDetails = getData(id);
  console.log(empDetails);
  return (
    <div className="container">
      {empDetails ? (
        <div >
          <h2>Employee Details</h2>
          <div>
            <img src={empDetails.image} alt='employeepic' />
          </div>          
          <p>Name: {empDetails.name}</p>
          <p>Company: {empDetails.Company}</p>
          <p>Employee ID: {empDetails.id}</p>
          <p>Gender: {empDetails.gender}</p>
          <p>Contact Number: {empDetails.phone}</p>
          <p>Email Id: {empDetails.email}</p>
        </div>
      ) : (
        <p>Employee details not found</p>
      )}
    </div>
  );
}
