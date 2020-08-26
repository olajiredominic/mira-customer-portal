import React, { Component } from 'react'

import Validators  from "../../common/Validators";
import {withContext} from '../../common/context';

class CreateClient extends Component {
    constructor(props){
        super(props);
        this.state = { 
            ...this.props, 
            email : '', 
            telephone : '' , 
            name: '',
            // company: '',
            // companyadr: '',
            errormessage: '',
            // file: '',
            // imagePreviewUrl: '',
            imageError: false,
        };
    }
    
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value,errormessage : '' });
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email} = this.state

        if(!Validators.validateEmail(email).status){
            const err = Validators.validateEmail(email).message
            this.setState({errormessage: err});
            setTimeout(()=> this.setState({errormessage: ''}),5000);
        }else{
            await this.setState({loading : true});
            setTimeout(() =>this.setState({loading : false}), 3000);
           const res = await this.state.createclient(document.getElementById("createclient"));
            console.log('submitting')
        }
    }

    // removeImage(e) {
    //     console.log(e, "Image removed")
    //     this.setState({imagePreviewUrl: ''})
    // }

    // removeOtherImage(e) {
    //     console.log(e, "Image removed")
    //     this.setState({ file: '',imageError : false})
    //     setTimeout(()=> this.setState({imageError: ''}),5000);
    //     // let myElement = document.querySelector(".other_files");
    //     // myElement.style.display = "none";
    // }
    // handleImageChange(e) {
    //     e.preventDefault();

    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     let images = []
    //     for (var i = 0; i < e.target.files.length; i++) {
    //         images[i] = e.target.files.item(i);
    //     }
    //     images = images.filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/))
        
    //     if (images.length === 0){

    //         reader.onloadend = () => {
    //             this.setState({
    //                 file: file,
    //                 imagePreviewUrl: '',
    //                 imageError: "Upload a valid Image"
    //             });
                
                
    //         }
            
            
    //     } else {
    //         this.setState({imageError: false})
    //             reader.onloadend = () => {
    //                 this.setState({
    //                     file: file,
    //                     imagePreviewUrl: reader.result
    //                 });
    //             }
    //         }

    //     reader.readAsDataURL(file)
    // }

    render() {
        // let {imagePreviewUrl} = this.state;
        //     let imagePreview = null;
        //     if (imagePreviewUrl) {
        //     imagePreview = (<img src={imagePreviewUrl} className="imagePreview" alt="preview"/>);
        //     } 
        return (

            <div className="container mx-auto row">

                <div className="col-md-8 offset-2 mb-3 mt-4" id="profile">

                    <form onSubmit={this.handleSubmit} id="createclient"> 
                    
                            <div className="card">
                                <div className="card-header bg-medium font-weight-bold text-dark">
                                    ADD CLIENT
                    </div>
                    
                                <div className="card-body">

                            <div className="row">
                                <div className="col-md-12">
                                    { this.state.errormessage != null && this.state.errormessage.length > 0 ? 
                                        <div className="alert alert-warning" role="alert">{this.state.errormessage}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        : 
                                        <span></span>
                                        }

                                    {this.state.imageError !== false ?
                                        <div className="alert alert-warning"> { this.state.imageError } </div>
                                        : <span></span> }
                                </div>
                            </div>
                                <div className="row">
                                        
                                   <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Peronal&nbsp;Name</label>
                                            <input type="text" className="form-control form-control-sm" name="name"
                                                id="name" placeholder="Enter Fullname"
                                                value={this.state.name}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Email</label>
                                            <input type="text" className="form-control form-control-sm" name="email"
                                                id="email" placeholder="Enter Email" 
                                                value={this.state.email}
                                                onChange={this.handleInputChange}/>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Telephone</label>
                                            <input type="text" className="form-control form-control-sm" name="telephone"
                                                id="telephone" placeholder="Phone no."
                                                value={this.state.telephone}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>


                                    {/* <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Name</label>
                                            <input type="text" className="form-control form-control-sm" name="company"
                                                id="company" placeholder="John" />
                                        </div>
                                    </div> */}

                                    {/*  <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Company&nbsp;Address</label>
                                            <input type="text" className="form-control form-control-sm" name="companyadr"
                                                id="companyadr" placeholder="No 6 Hello World close" />
                                        </div>
                                    </div> */}

                                    {/* <div className="col-md-6 mb-3"> 
                                    {this.state.imageError !== false ? 
                                        <div className="other_files mb-2">
                                            <i className="fa fa-trash" onClick={(e) => this.removeOtherImage(e)}></i>
                                            {this.state.file.name}
                                        </div>
                                        :
                                        <div className="imgPreview mb-2">
                                            <i className="fa fa-trash" onClick={(e) => this.removeImage(e)}></i>
                                                {imagePreview}
                                            </div>
                                       }
                                        <div className="form-group">
                                            <label htmlFor="" className="sr-only">Image</label>
                                            <input type="file" className="form-file form-file-sm" name="image"
                                                id="image" placeholder="" 
                                                onChange={(e)=>this.handleImageChange(e)} />
                                        </div>    
                                    </div> */}

                                </div>


                            </div>

                            <div className="card-footer">
                                <div className="text-center">

                                    <button type="submit" className="btn btn-sm btn-primary px-3">
                                        <i className="fas fa-folder-open mr-2"></i>
                            Save
                        </button>&nbsp;
                                    <button className="btn btn-sm btn-danger px-3" type="reset">
                                        <i className="fas fa-history mr-2"></i>
                            Reset
                        </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default withContext(CreateClient);