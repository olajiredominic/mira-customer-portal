import React, { Component } from 'react';

import Validators  from "../../common/Validators";
import {withContext} from '../../common/context';

class create_ticket extends Component {
    constructor(props){
        super(props);
        this.state = { 
            ...this.props, 
            email : '' , 
            subject: '',
            type: '',
            message: '',
            loading: false, 
            errormessage: ''
        };
    }
    
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value,errormessage : '' });
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {email} = this.state
       
        //Waste 3 seconds
     
        if(!Validators.validateEmail(email).status){
            const err = Validators.validateEmail(email).message
            this.setState({errormessage: err});
            setTimeout(()=> this.setState({errormessage: ''}),5000);
        }else{
            await this.setState({loading : true});
            setTimeout(() =>this.setState({loading : false}), 3000);
            
        //    const res =  await this.state.changepassword(currentpwd,newpwd, confirmnewpwd);
        //    if(!res['status'])this.setState({errormessage: res['message']});
        //     else{
        //         this.props.history.push('/dashboard');
        //     }
        }
        console.log('changed successfully!')
    }

    render() {
        return (
            <div className="container-fluid content text-white">
            <div className="row">

                <div className="col-md-12" id="profile">
                    <form onSubmit={this.handleSubmit}>

                    { this.state.errormessage != null && this.state.errormessage.length > 0 ? 
                                    <div className="alert alert-warning" role="alert">{this.state.errormessage}</div>
                                    : 
                                    <span></span>
                                }

                        <div className="card">
                            <div className="card-header">
                                Create Ticket
                                
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            {/* <label for="" className="">Email</label> */}
                                            <input type="text" className="form-control form-control-sm" name="email"
                                                id="email" value="Johndoe@mail.com" placeholder=""
                                                value={this.state.email} required
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            {/* <label for="" className="">Subject</label> */}
                                            <input type="text" className="form-control form-control-sm" name="subject"
                                                id="subject" value="John" placeholder="" 
                                                value={this.state.subject} required
                                                onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            {/* <label for="type" className="">Ticket&nbsp;Type</label> */}
                                            <select name="type" id="type" className=" form-control form-select form-select-sm">
                                                <option value="" selected disabled>--Select&nbsp;Ticket&nbsp;Type--</option>
                                                <option value="complaint">complaint</option>
                                                <option value="request">Request</option>
                                                <option value="enquiry">Enquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            {/* <label for="message">Message</label> */}
                                            <textarea id="message" name="message" rows="10" cols="50" className="form-control text-left" 
                                            value={this.state.message} required
                                            onChange={this.handleInputChange}>
                                                
                                            </textarea>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="card-footer">
                                <div className="float-right">

                                    <button className="btn btn-sm btn-primary mr-2">
                                        <i className="fas fa-folder-open"></i>
                                        Save
                                    </button>
                                    <button className="btn btn-sm btn-danger" type="reset">
                                        <i className="fas fa-history"></i>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            </div>
        )
    }
}

export default withContext(create_ticket);