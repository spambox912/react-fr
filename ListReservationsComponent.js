import React, {Component} from "react";
import ReservationService from "../services/ReservationService";

class ListReservationsComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            reservations: []

        }
        this.addReservation = this.addReservation.bind(this);
        this.deleteReservation = this.deleteReservation.bind(this);
    }

    deleteReservation(id){
        ReservationService.deleteReservation(id).then(res =>{
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.id !== id)});

        })
    }

    viewReservation(id){
        this.props.history.push('/viewReservation/${id}');
    }

    componentDidMount(){
        ReservationService.getReservations().then((res) => {this.setState({reservations: res.data});
        });    
    }

    addReservation(){
        this.props.history.push('/addReservation/add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Reservation List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addReservation}> Add Reservation</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th width="8%"> Type</th>
                                    <th width="20%"> Yacht's name</th>
                                    <th width="20%"> Customer</th>
                                    <th width="20%"> Reservation from</th>
                                    <th width="20%"> Reservation to</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key = {reservation.id}>
                                             <td> { reservation.yacht.type} </td>
                                             <td> { reservation.yacht.name} </td>
                                             <td> { reservation.customer.firstName + " " +  reservation.customer.lastName} </td>    
                                             <td> {reservation.reservationFrom}</td>
                                             <td> {reservation.reservationTo}</td>
                                             <td>
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteReservation(reservation.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewReservation(reservation.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }


}
export default ListReservationsComponent