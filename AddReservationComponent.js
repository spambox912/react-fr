import React, { useState, useEffect  } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import  { useRef } from 'react';
import ListCustomersComponent from "./ListCustomersComponent";
import { createContext } from "react";
import CustomerService from "../services/CustomerService";
import Axios from "axios";
import { Dropdown } from "bootstrap";
import Select from 'react-select'
import ReservationService from "../services/ReservationService";

const App = () => {
  // define check-in and check-out state
  const [startDate, setstartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [yachts, setYachts] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [yacht, setYacht] = useState(null);
  const [reservationFrom, setReservationFrom] = useState(null);
  const [reservationTo, setReservationTo] = useState(null);
  const [reservation, setFormData] = useState({
    customer: "",
    yacht: "",
    reservationFrom: "",
    reservationTo: ""});

    const sdRef = useRef('');
    const edRef = useRef('');
    const cusRef = useRef('');
    const yaRef = useRef('');


    const handleCustomerChange = (data) => {
      setCustomer(data.id);
      cusRef.current = data.id;

      console.log('set customer ', data.id)
  
    };

    const handleYachtChange = (val) => {
      //setFormData(val.registrationNumber);
      setYacht(val.registrationNumber);
      yaRef.current = val.registrationNumber;

      console.log('set yacht ', val.registrationNumber)
      console.log('ya ref ', yaRef.current)
  
    };

    
    const handleSubmit = (data) => {


        setFormData(
        reservation.customer = parseInt(cusRef.current, 10),
        reservation.yacht = yaRef.current,
        reservation.reservationFrom = sdRef.current,
        reservation.reservationTo = edRef.current
        );


        console.log('reservationFrom ', reservation.reservationFrom)
        console.log('reservationTo ', reservation.reservationTo)
        console.log('customer ', reservation.customer)
        console.log('yacht ', reservation.yacht)

        
  
  

        ReservationService.createReservation(reservation.useState);
        Axios.post(
          "http://localhost:8081/api/reservations", reservation
        );
    }



    const fetchCustomers = async () => {
      const { data } = await Axios.get(
        "http://localhost:8081/api/customers"
      );
      const customers = data;
      setCustomers(customers);
      console.log(customers);
    };

    
    const fetchYachts = async () => {
      const { data } = await Axios.get(
        "http://localhost:8081/api/yachts"
      );
      const yachts = data;
      setYachts(yachts);
      console.log(yachts);
    };

    useEffect(() => {

      fetchCustomers()
      fetchYachts()
    
     }, []);

  // define handler change function on check-in date
  const handleStartDate = (date) => {
    setstartDate(date);
    setEndDate(null);
    setFormData({reservationFrom: moment(date).format("yyyy-MM-DD")})
    stringerSd(date);
    sdRef.current =  moment(date).format("yyyy-MM-DD");

  };




  function stringerSd(date){
    const valueOfInput = moment(date).format("yyyy-MM-DD");
    //setFormData({reservationFrom: valueOfInput});
    setReservationFrom(valueOfInput);

  }

  function stringerEd(date){
    const valueOfInput = moment(date).format("yyyy-MM-DD");
    setFormData({reservationTo: valueOfInput});
    setReservationTo(valueOfInput);

  }

  


  // define handler change function on check-out date
  const handleEndDate = (date) => {
    setEndDate(date);
    setFormData({reservationTo: moment(date).format("yyyy-MM-DD")})
    stringerEd(date);
    edRef.current =  moment(date).format("yyyy-MM-DD");
    
    
  };

  function stringSd(date){
    let stringSd = moment(startDate).format("yyyy-MM-DD");
    return stringSd;
  }

  function stringEd(date){
    let stringEd = moment(endDate).format("yyyy-MM-DD");
    return stringEd;
  }


  /*

    <div>
    <div>
      {customers.map((customer) => (
        <p>{customer.firstName}</p>
      ))}
    </div>
    <div>
      {yachts.map((yacht) => (
        <p>{yacht.name}</p>
      ))}
    </div>
    </div>

          <td>{reservation.reservationTo}</td>
          <td>{JSON.stringify(reservation.reservationFrom)}</td>







   <div>
    {customers.map((customer) => (

      <div key={customer.id}>
        <p>
          Customer Name: <span>{customer.firstName}</span>
        </p>
        <p>
          last name : <span>{customer.lastName}</span>
        </p>
      </div>  

    ))}
    </div>

    <div>
    {yachts.map((yacht) => (

      <div key={yacht.registrationNumber}>
        <p>
          Yacht type: <span>{yacht.type}</span>
        </p>
        <p>
           name : <span>{yacht.name}</span>
        </p>
      </div>  

    ))}
    </div>










        */

  return (

    <form onSubmit={handleSubmit}>
      <h4>Add reservation form</h4>
<div>
    <table>
      <tbody>
      <tr>
      <td>
  
  <label>Pick up </label>
  <DatePicker
    value={startDate}
    selected={startDate}
    minDate={new Date()}
    onChange={handleStartDate}
    placeholderText="reservation from"
    dateFormat={"yyyy-MM-dd"}
    
  />
  </td>
  <td>
  <label>Drop off </label>
  <DatePicker
    selected={endDate}
    minDate={startDate}
    onChange={handleEndDate}
    placeholderText="reservation to"
    dateFormat={"yyyy-MM-dd"}
    
  />
  
  </td>
         </tr>

         <tr>
          <td><label>Reservation from: </label></td>
          <td>{JSON.stringify(sdRef.current)}</td>
          
        </tr>
        <tr>
        <td><label>Reservation to: </label></td>
          <td>{JSON.stringify(edRef.current)}</td>
        </tr>

        </tbody>
    </table>



  

 

<td>
    <div>
    <Select
                value={reservation.customer}
                onChange={handleCustomerChange}
                options={customers}
                getOptionValue={(customer) => customer.id}
                getOptionLabel={(customer) => customer.lastName}
              />
    </div>
    </td>

<td>
    <div>
    <Select
                value={reservation.yacht}
                onChange={handleYachtChange}
                options={yachts}
                getOptionValue={(yacht) => yacht.registrationNumber}
                getOptionLabel={(yacht) => yacht.name}
              />
    </div>
    </td>




  
   

    </div>

    <button type="submit">Submit</button>
    </form>


    
    
  );
};

export default App;
