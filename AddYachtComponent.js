import { useState } from "react";
import YachtService from '../services/YachtService.js';

export default function Multiple() {
  const [yacht, setFormData] = useState({registrationNumber: "",
  name: "",
  type: "",
  length: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${yacht.name}, Type: ${yacht.type}, Length: ${yacht.length}, Registration number: ${yacht.registrationNumber}`
    )
    
    YachtService.createYacht(yacht);
};

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add yacht form </h4>
      <div>
      <label htmlFor="registrationNumber">Registration number: </label>
      <input type="text" id="registrationNumber" name="registrationNumber" value={yacht.registrationNumber} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" value={yacht.name} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="type">Type: </label>
      <input type="text" id="type" name="type" value={yacht.type} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="length">Length: </label>
      <input type="text" id="length" name="length" value={yacht.length} onChange={handleChange}/>
      </div>



      <button type="submit">Submit</button>
    </form>
  );
}