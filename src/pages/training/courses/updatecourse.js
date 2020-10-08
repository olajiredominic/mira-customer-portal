import React, { Component } from 'react'
import {withContext} from '../../../common/context';
import { HTTPURL, APIKEY, FILEURL } from '../../../common/global_constant';
import placeholder from "../../../assets/images/product-placeholder.gif";

class UpdateCourse extends Component {
    constructor(props){
        super(props);
        this.state = { 
            ...this.props, 
            name : '', 
            id: '',
            description: '',
            imageurl:'',
            errormessage: '',
            loading: false,
            successmessage: '',
            file: '',
            imagePreviewUrl: '',
            imageError: false,
        };

    }

    componentDidMount() {
        this.getCourse();
    }

    async getCourse() {
        const headers = new Headers();
        headers.append("API-KEY", APIKEY);
        const res = await fetch(HTTPURL + `training/listcourses`, {
            headers: headers,
        }).then((response) => response.json());
        if (res["status"]) {
            this.setState({ courses: res["data"]});

            const courseid = this.props.location.pathname.split("/")[2];
    
            const selectedCourse = this.state.courses.find(course => course.id == courseid);
            await this.setState({
              title: selectedCourse.title,
              description: selectedCourse.description,
              cost: selectedCourse.cost,
              date: selectedCourse.createdat,
              durations: selectedCourse.durations,
              imageurl: selectedCourse.imageurl,
              courseid: selectedCourse.id
            });
        }
    }
    
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value,errormessage : '' });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const headers = new Headers();
        headers.append("API-KEY", APIKEY);
    
        let formdata = new FormData();
        formdata.append("title", this.state.title);
        formdata.append("description", this.state.description);
        formdata.append("cost", this.state.cost);
        formdata.append("userid", this.state.user.userid);
        formdata.append("courseid", this.state.courseid);
    
        const res = await fetch(HTTPURL + "training/updatecourse", {
          method: "POST",
          body: formdata,
          headers: headers,
        }).then((response) => response.json())
        this.setState({ loading: false });
        if (res.status) {
          this.state.showAlert('success',res.message)
          this.props.history.goBack();

        }
        else{
          this.state.showAlert('danger', res.message);
        }
        this.setState({ updateData: true });
        return res;
      };


    render() {
        let {imagePreviewUrl} = this.state;
            let imagePreview = null;
            if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} className="imagePreview"/>);
            }  else{
                imagePreview = (<img src={FILEURL + this.state.imageurl} onError={(e) => { e.target.onerror = null; e.target.src = placeholder }} className="imagePreview"/>);
            }
        return (

            <div className="container justify-content-center mt-4 row">
                                
                <div className="col-md-8">

                        <form onSubmit={this.handleSubmit} id="createclient">

                            <div className="card">
                                <div className="card-header bg-medium font-weight-bold text-dark">
                                    UPDATE COURSE
                                </div>

                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                                <label htmlFor="" className="sr-only">Title</label>
                                                <input
                                                 type="text" 
                                                 className="form-control" 
                                                name="title"
                                                    id="title" placeholder="Course Title"
                                                    value={this.state.title} 
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="" className="sr-only">Description</label>
                                                <input type="text" className="form-control" name="description"
                                                    id="description" placeholder="Course Description"
                                                    value={this.state.description} 
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="" className="sr-only">Cost</label>
                                                <input type="text" className="form-control" name="cost"
                                                    id="cost" placeholder="Cost"
                                                    value={this.state.cost} 
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="text-center">
                                        {this.state.loading ?
                                            <button type="submit" className="btn btn-sm btn-primary px-4">
                                                <div className="spinner-border text-white" role="status" id="loader">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </button>
                                            : <button type="submit" className="btn btn-sm btn-primary px-3">
                                                <i className="fas fa-folder-open mr-2"></i>
                                        Save
                                    </button>
                                        }


                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

            </div>

        )
    }
}
export default withContext(UpdateCourse);