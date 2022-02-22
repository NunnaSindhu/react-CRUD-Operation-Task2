import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditUser({ getData, updateData }) {
  const [newInput, setNewInput] = useState();
  const [genderValue, setGenderValue] = useState();
  const { id } = useParams();
 
  //by using useParams get id of user and send it to getData function to get whole info of user
  useEffect(() => {
    const userData = getData(id); 
    setGenderValue(userData.gender);  
    setNewInput(userData);    
  }, []);

  //radio button onchange handler function
  const handlerChange = (event) => {
    setGenderValue(event.target.value);
  };
  // input onchange handler function
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewInput((values) => ({ ...values, [name]: value }));
  };

  //on Submit handler function

  const handleSubmit = () => {    
    updateData(newInput,genderValue);
    setNewInput("");
    setGenderValue("");
  };
 
  return (
    //create a form to bring the the existing data in the form fields and to update the data of user 
    <div>
      <h1>Update Employee/User Details</h1><br/><br/>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          UserName : &nbsp;
          <input
            type="text"
            name="name"
            placeholder="FullName"
            value={newInput && newInput.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Gender : &nbsp;
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={genderValue ==='Male'}
            onChange={handlerChange}
          />
          &nbsp;Male&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={genderValue ==='Female'}
            onChange={handlerChange}
          />
          &nbsp;Female
        </label>
        <br />
        <br />
        <label>
          UserId : &nbsp;
          <input
            type="number"
            name="id"
            value={newInput && newInput.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Company : &nbsp;
          <input
            type="text"
            name="Company"
            placeholder="Company Name"
            value={newInput && newInput.Company}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Contact Number : &nbsp;
          <input
            type="number"
            name="phone"
            value={newInput && newInput.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email Id : &nbsp;
          <input
            type="email"
            name="email"
            value={newInput && newInput.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          UserImage Url : &nbsp;
          <input type="url" name="image" value={newInput && newInput.image} />
        </label>
        <br />
        <br />
        <button className="btn btn-primary" onClick={handleSubmit} >
          Submit
        </button>
      </form>
    </div>
  );
}
