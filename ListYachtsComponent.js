import React, {Component} from "react";
import YachtService from "../services/YachtService";

class ListYachtsComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            yachts: []

        }
        this.addYacht = this.addYacht.bind(this);
        this.deleteYacht = this.deleteYacht.bind(this);
    }

    deleteYacht(registrationNumber){
        YachtService.deleteYacht(registrationNumber).then(res =>{
            this.setState({yachts: this.state.yachts.filter(yacht => yacht.registrationNumber !== registrationNumber)});

        })
    }

    viewYacht(id){
        this.props.history.push('/viewYacht/${registrationNumber}');
    }

    componentDidMount(){
        YachtService.getYachts().then((res) => {this.setState({yachts: res.data});
        });    
    }

    addYacht(){
        this.props.history.push('/addYacht/add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Yacht List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Yacht</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th width="8%"> Registration number</th>
                                    <th width="20%"> Type</th>
                                    <th width="20%"> Name</th>
                                    <th width="20%"> Length</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.yachts.map(
                                        yacht => 
                                        <tr key = {yacht.registrationNumber}>
                                            <td> { yacht.registrationNumber} </td>
                                             <td> { yacht.type} </td>
                                             <td> { yacht.name} </td>
                                             <td> { yacht.length} </td>    
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteYacht(yacht.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewYacht(yacht.id)} className="btn btn-info">View </button>
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
export default ListYachtsComponent