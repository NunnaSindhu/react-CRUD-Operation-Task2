import React, { useState } from "react";
const formData = {
  name: "",
  gender: "",
  id: "",
  Company: "",
  phone: "",
  email: "",
  image: "",
};
export default function CreateUser({ onSubmit,setInputs,inputs }) {
  const [input, setInput] = useState(formData);
  const [gender, setGender] = useState("");

  const handlerChange = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = () => {   
    console.log(input);
    // onSubmit(input, gender,setGender,setInput);
   
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
    
    setGender("");
    setInput({
      name: "",
      gender: "",
      id: "",
      Company: "",
      phone: "",
      email: "",
      image: "",
    });
  };
  return (
    <div className="container-fluid">
      <h1 className="display-5" style={{ textAlign: "center" }}>
        Create new User
      </h1>
      <br />

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">
            UserName : &nbsp;
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="FullName"
              value={input.name}
              onChange={handleChange}
              required={true}
            />
          </label>
        </div>
        <div className="mb-3">
          Gender : &nbsp;
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={handlerChange}
              required
            />

            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={handlerChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            UserId : &nbsp;
            <input
              className="form-control"
              type="number"
              name="id"
              value={input.id}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Company : &nbsp;
            <input
              className="form-control"
              type="text"
              name="Company"
              placeholder="Company Name"
              value={input.Company}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Contact Number : &nbsp;
            <input
              className="form-control"
              type="tel"
              name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={input.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email Id : &nbsp;
            <input
              className="form-control"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            UserImage Url : &nbsp;
            <input
              className="form-control"
              type="url"
              name="image"
              value={input.image}
              onChange={handleChange}
            />
          </label>
        </div>

        <button  className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
