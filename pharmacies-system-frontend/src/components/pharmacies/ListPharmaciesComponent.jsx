import React, { Component } from 'react';
import PharmacyService from '../../services/PharmacyService';

class ListPharmaciesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            pharmacies: []
        }
    }

    componentDidMount(){
        PharmacyService.getPharmacies().then((response) =>{
            this.setState({pharmacies: response.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List Pharmacies</h2>
                <div className="row">
                    <table className="table table-striped tabl-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>State number</th>
                                <th>Country</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pharmacies.map(
                                    pharmacy =>
                                    <tr key={pharmacy.id}>
                                        <td>{pharmacy.name}</td>
                                        <td>{pharmacy.stateNumber}</td>
                                        <td>{pharmacy.country}</td>
                                        <td>{pharmacy.address}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListPharmaciesComponent;