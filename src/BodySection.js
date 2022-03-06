import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ListUsers from "./pages/ListUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import { usersData } from "./UsersData";
import ViewProfile from "./pages/ViewProfile";

export default function BodySection() {
  const [inputs, setInputs] = useState(usersData);

  //Create data on form submission
  const formSubmit = (input, gender) => {
    console.log(input);
    const newInput = {
      name: input.name,
      phone: input.phone,
      email: input.email,
      Company: input.Company,
      id: input.id,
      gender: gender,
      image: input.image,
    };
    setInputs([...inputs, newInput]);  
  };
  //Read data
  const getData = (id) => {
    return inputs.find((user) => user.id === id);
  };

  // Delete userdata on clicking delete button

  const deleteHandler = (id) => {
    setInputs(
      inputs.filter((user) => {
        return user.id !== id;
      })
    );
  };

  // Update User data on clicking edit button
  const updateData = (editedData,genderName) => {
    console.log(editedData);
    let temp = [...inputs];
    let index = temp.findIndex((item) => item.id === editedData.id);
    temp[index] = editedData;
    temp[index].gender=genderName;
    setInputs(temp);
  };


  return (
    <div id="content-wrapper" className="d-flex flex-column">
     
      <br />
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center mb-4">
            <Routes>
              <Route path="/pages/DashBoard" element={<DashBoard />} />
              <Route index element={<DashBoard />} />
              <Route
                path="/pages/ListUsers"
                element={
                  <ListUsers usersData={inputs} />
                }
              />
              <Route
                path="/pages/CreateUser"
                element={<CreateUser onSubmit={formSubmit} setInputs={setInputs} inputs={inputs} />}
              />
              <Route
                path="/pages/EditUser"
                element={<EditUser getData={getData} updateData={updateData} />}
              />
              <Route path="/pages/EditUser/:id" element={<EditUser updateData={updateData} getData={getData} />} />
              <Route
                path="/pages/Profile"
                element={
                  <Profile usersData={inputs} deleteHandler={deleteHandler} />
                }
              />
              <Route
                path="/pages/Profile/:id"
                element={<ViewProfile getData={getData} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
