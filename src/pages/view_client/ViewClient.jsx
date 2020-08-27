import React from 'react'
import { Link } from "react-router-dom";

export default function ViewClient() {

    const edit = () => {
        // Make Form Editable
        let edit = document.querySelector('#edit');
        let input = document.getElementsByTagName('input');


        for (let d = input.length - 1; d >= 0; d--) {
            edit.addEventListener("click", function (e) {
                input[d].removeAttribute("disabled");
            });
        };
    }

    return (
        <div className="container-fluid mx-auto">
            <div className="row mt-4">

                <div className="col-md-8 mb-3" id="profile">
                    <form action="">
                        <div className="card">
                            <div className="card-header bg-medium font-weight-bold text-dark">
                                VIEW CLIENT
                <span className="float-right" id='edit' style={{ cursor: 'pointer' }} onClick={edit}><i className="fas fa-pen-square fa-2x"></i>
                                </span>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Name</label>
                                            <input type="text" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="Name" autoComplete="name" disabled />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Email</label>
                                            <input type="email" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="johnDoe@mail.com" autoComplete="email" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Telephone</label>
                                            <input type="tel" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="090 ......" autoComplete="tel" disabled />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Name</label>
                                            <input type="text" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="Company Name" autoComplete="name" disabled />
                                        </div>
                                    </div>


                                    <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Address</label>
                                            <input type="text" className="form-control form-control-sm" name=""
                                                id="" value="" placeholder="Company Address" autoComplete="text" disabled />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-0">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Image</label>
                                            <input type="file" className="form-file form-file-sm" name=""
                                                id="" placeholder="" />
                                        </div>
                                    </div>

                                    
                                    {/* <div className="col-md-12 mb-0">
                                        <div className="form-group">
                                            <textarea id="message" name="message" rows="5" cols="50" className="form-control text-left form-control-sm" 
                                            value="" required placeholder="Describe yourself" />
                                        </div>
                                    </div> */}

                                </div>


                            </div>

                            <div className="card-footer">
                                <div className="float-right">

                                    <button className="btn btn-sm btn-primary px-3">
                                        <i className="fas fa-folder-open pr-2"></i>
                        Save
                    </button>
                                
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-4 text-center" id='profilePix'>
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <img src="https://miratechnologiesng.com/img/icons/miraicon.png"
                                alt="profile picture" className="img-fluid" style={{ marginTop: '-80px' }} />
                                <h6 className="mt-3">Rhoda Stone</h6>
                                <p className="mt-2"><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos <br/>
                                <i class="fa fa-envelope" aria-hidden="true"></i> rhoda@gmail.com </p>
                            {/* <p className="text-dark mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repudiandae veniam ullam excepturi natus perspiciatis distinctio amet error
                            nostrum
                voluptas at accusamus,.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        
        
                        <div className="card">
                            <div className="card-header bg-medium font-weight-bold text-dark">
                                PRODUCTS
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div class="alert alert-warning" role="alert">
                                    Product is empty!
                                    </div>
                                    <button type="button" className="btn btn-sm btn-primary new_product">
                                        <Link to="/viewproduct">
                                    <i className="fas fa-folder-plus" style={{color: '#fff'}} aria-hidden="true">
                                            <small className="newproduct" style={{color: '#fff'}}>&nbsp;Add&nbsp;New&nbsp;Product</small>
                                    </i>
                                        </Link>
                                    </button>
                                    </div>
                                </div>
                            </div>

                    
                        </div>
        </div>
    )
}
