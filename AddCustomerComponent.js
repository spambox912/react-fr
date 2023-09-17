import { useState } from "react";
import CustomerService from '../services/CustomerService';

export default function Multiple() {
  const [customer, setFormData] = useState({firstName: "",
  lastName: "",
  email: "",
  phone: "",
  licenceNumber: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    CustomerService.createCustomer(customer);
    alert(`Name: ${customer.name}, Email: ${customer.email}, Message: ${customer.message}`
    )
    
    CustomerService.createCustomer(customer);
};

  return (
    
    <form onSubmit={handleSubmit}>
      <h4>Add customer form</h4>
      <div>
      <label htmlFor="firstName">First name: </label>
      <input type="text" id="firstName" name="firstName" value={customer.firstName} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="lastName">Last name: </label>
      <input type="text" id="lastName" name="lastName" value={customer.lastName} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="email">Email: </label>
      <input type="text" id="email" name="email" value={customer.email} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="email">Phone: </label>
      <input type="text" id="phone" name="phone" value={customer.phone} onChange={handleChange}/>
      </div>

      <div>
      <label htmlFor="licenceNumber">Licence number: </label>
      <input type="text" id="licenceNumber" name="licenceNumber" value={customer.licenceNumber} onChange={handleChange}/>
      </div>


      <button type="submit">Submit</button>
    </form>
  );
}