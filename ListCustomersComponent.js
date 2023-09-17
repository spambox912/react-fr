import React, {Component} from "react";
import CustomerService from "../services/CustomerService";


class ListCustomersComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            customers: []

        }
        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id){
        CustomerService.deleteCustomer(id).then(res =>{
            this.setState({customers: this.state.customers.filter(customer => customer.id !== id)});

        })
    }

    viewCustomer(id){
        this.props.history.push('/customers/${id}');
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {this.setState({customers: res.data});
        });    
    }

    addCustomer(){
        this.props.history.push('/customers/add');
    }

    sendCustomers(){
        return this.state.customers;
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customer List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th width="8%"> First name</th>
                                    <th width="20%"> Last name</th>
                                    <th width="20%"> Email</th>
                                    <th width="20%"> Phone</th>
                                    <th width="20%"> Licence number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                             <td> { customer.firstName} </td>
                                             <td> { customer.lastName} </td>
                                             <td> { customer.email} </td>    
                                             <td> {customer.phone}</td>
                                             <td> {customer.licenceNumber}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.id)} className="btn btn-info">View </button>
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
export default ListCustomersComponent