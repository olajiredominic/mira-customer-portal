import React, { Component } from 'react';
<<<<<<< HEAD
import { HTTPURL } from '../../common/global_constant';
=======
import { Link } from "react-router-dom";
import { HTTPURL } from '../../common/global_constant';
import {withContext} from '../../common/context';
>>>>>>> 20660585eeaf6f7ff7ace8b4752e6df21848b9d6
import image from '../../assets/images/Accsiss.png'


class viewproduct extends Component {
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
=======
            ...props,
>>>>>>> 20660585eeaf6f7ff7ace8b4752e6df21848b9d6
            product: [],
            products: [],
            id: 1
        }
    }

    componentDidMount(){
        const headers = new Headers();
        headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
        fetch(HTTPURL + 'product', {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json())
<<<<<<< HEAD
        .then(data => this.setState({products: data.data}));
=======
        .then(data => {
            this.setState({products: data.data})
            console.log(this.state.products)
        });
>>>>>>> 20660585eeaf6f7ff7ace8b4752e6df21848b9d6

        let product = []
        console.log('changed successfully!', product)
        for (let i = 0; i < this.state.products.length; i++) {
            console.log(this.state.products[i])
            product.push(this.state.products[i])
            this.setState({ product :  product });
        }
    }

<<<<<<< HEAD
=======
    handleViewMore = e => {
        this.props.viewmoredetails(e)
        this.props.history.push('/productdetails');
    }

>>>>>>> 20660585eeaf6f7ff7ace8b4752e6df21848b9d6
    render() {
        return (
            <div className="container mx-auto row">

                <div className="container">
                    <div className="row mt-1" style={{position:'fixed', top: '70px' , right: '10px', zIndex:'4'}}>
                        <div className="col-md-3 offset-md-9">
                            <button type="button" className="btn btn-sm btn-primary new_product">
                            <i className="fas fa-folder-plus" aria-hidden="true">
                                <Link to="/createproduct">
                                    <small className="newproduct" style={{color: '#fff'}}>&nbsp;New&nbsp;Product</small>
                                </Link>
                            </i>
                            </button>
                        </div>
                    </div>
<<<<<<< HEAD
                    {this.state.products.map( product => {
                        return(
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="card text-center products">
                                <img src={image} className="image_product" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    {/* <p>DESIGNED FOR ACCOUNTING, SALES AND INVOICING.</p> */}
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        )}
                    )}
                    
                    <div className="row mt-4">
                        <div className="col-md-3">
=======
                    <div className="row my-2">
                    {this.state.products.map( product => {
                        return(
                        <div className="col-md-3 col-lg-4 col-sm-12">
>>>>>>> 20660585eeaf6f7ff7ace8b4752e6df21848b9d6
                            <div className="card text-center products">
                                <img src={image} className="image_product" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <Link onClick={this.handleViewMore}>
                                        <span class="badge px-3 py-2 badge-primary" value={product.id} style={{cursor:"pointer", fontSize:'medium'}}>View</span>
                                    </Link>
                                </div>
                                    <i className="fa fa-edit mr-1"></i>
                                    <i className="fa fa-trash text-danger"></i>
                            </div>
                        </div>
                        )}
                    )}
                    </div>
                    

                    {/* <div className="row my-2">

                    {this.state.products.map( product => {
                        return(
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="card-container">
                                <div className="card">
                                    <div className="front">
                                        <div className="card-header text-center font-weight-bold">
                                            <img src={image} className="image_product" alt="" />
                                           
                                    <h5 className="card-title">{product.name}</h5>
                                    <Link onClick={this.handleViewMore} className="btn btn-primary">
                                        <span value={product.id} >View</span>
                                        </Link>   
                                            </div>
                                    </div>

                                    <div className="back">
                                        <div className="card-header text-center font-weight-bold">
                                    <h5 className="card-title">{product.name}</h5>
                                        </div>
                                        <div className="card-body">
                                        <p className="card-title">{product.description}</p> 
                                        <Link onClick={this.handleViewMore} className="btn btn-primary">
                                        <span value={product.id} >View</span>
                                        </Link>                                         
                                    </div>
                                    </div>

                                </div>
                            </div>

                        </div>
    
                        )}
                        )}
                    </div> */}

                </div>

            </div>
        );
    }
}


export default withContext(viewproduct);