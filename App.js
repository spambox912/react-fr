import logo from './logo.svg';
import './App.css';
import ListReservationComponent from './components/ListReservationsComponent';
import ListCustomerComponent from './components/ListCustomersComponent';
import AddReservationComponent from './components/AddReservationComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import AddYachtComponent from './components/AddYachtComponent';
import 'react-datepicker/dist/react-datepicker.css'
import ListYachtsComponent from './components/ListYachtsComponent';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Switch  } from "react-router-dom";
        //<NaiveReservationComponent />
        //<ListReservationComponent /> works ok
       // <ListCustomerComponent /> works ok
       //<ListYachtsComponent /> works ok


       /*


       <Link to={"/ListCustomersComponent"} className="navbar-brand">
            Customers
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/yachts"} className="nav-link">
                Yachts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/reservations"} className="nav-link">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
<div className="container mt-3">
          <Routes>

              <Route path="/" element={<ListCustomerComponent/>} />
              <Route path="/yachts" element={<ListYachtsComponent/>} />
              <Route path="/customers" element={<ListCustomerComponent/>} />
              <Route path="/reservations" element={<ListReservationComponent/>} />

            
          </Routes>
        </div>

       */


function App() {
  return (

    <div>

      <AddReservationComponent />
        
          


        
      </div>










  );
}

export default App;
