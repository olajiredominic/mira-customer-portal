import React, { Component } from "react";
import { HTTPURL, APIKEY } from "../../common/global_constant";
import { withContext } from "../../common/context";
import Pagination from "../../common/components/Pagination";

class webanalytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ...this.props,
          userid: "",
          startdate: "",
          enddate: "",
          type: "",
          on: "",
          searchUser: "",
          clients: [],
          currentPage: 1,
          numberPerPage: 10,
          totalLists: [
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
            {
                date: '2020-09-29 12:04PM',
                location: 'Lagos',
                device: 'Infinix Smart 3 Plus',
                IP: '172.16.234.23'
            },
          ],
          pageNumbers: [],
          currentLists: [],
        };
      }


      handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "searchUser") {
          let client = this.state.users.find(
            (item) => item.firstname + " " + item.lastname == value
          );
          if (client == null)
            client = this.state.clients.find((item) => item.businessname == value);
          if (client) this.state.userid = client.userid || client.user_id;
        }
        this.setState({ [name]: value });
      };
    
    
      handleClick(event) {
        const paginatedbuttons = document.querySelectorAll("a");
    
        this.setState({
          currentPage: event.target.id,
        });
    
        paginatedbuttons.forEach((btn) => {
          if (btn.id == event.target.id) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    
    

      update = (newPage) => {
        this.setState({ currentPage: newPage });
      };
    
      render() {
        const { numberPerPage, currentPage, totalLists } = this.state;
    
        // Logic for displaying current lists
        const indexOfLastList = currentPage * numberPerPage;
        const indexOfFirstList = indexOfLastList - numberPerPage;
        const currentLists = totalLists.slice(indexOfFirstList, indexOfLastList);
        this.state.currentLists = currentLists;

    return (
      <div className="container">
          
        <div className="row">
        <div className="col-md-12 col-sm-12 box1 mb-3" id="profile">
            {this.state.totalLists.length === 0 ? (
              <div className="alert alert-warning mt-5" role="alert">
                <h6 className="text-center">No web analytic records!</h6>
              </div>
            ) : (
              <div>
              <div className="w-100 text-center">
                <h3  className="text-uppercase">Web Analytics </h3>
              </div>
                  <div className="row">
                  <div className="col-md-12 col-sm-12 mt-3 mb-3">
            {/* <div className="card"> */}
                {/* <div className="card-header bg-medium font-weight-bold text-dark">
                <i className="fa fa-filter"></i> FILTER BY
                </div> */}
                <div className=" py-2">
                <form onSubmit={this.handleSearch}>

                <div className="row">
                    

                <div className="col-md-3">
                <div className="form-group mt-3">
                  <label
                    htmlFor="startdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    Start Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-sm alt alt_right"
                      name="startdate"
                      id="startdate"
                      placeholder="Start Date"
                      value={this.state.startdate}
                      onChange={this.handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>
                </div>

               <div className="col-md-3">
               <div className="form-group mt-3">
                  <label
                    htmlFor="startdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    End Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-sm alt alt_right"
                      name="enddate"
                      id="enddate"
                      placeholder="End Date"
                      value={this.state.enddate}
                      onChange={this.handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>

               </div>
               
               <div className="col-md-3">
               <div className="form-group mt-3">
                  <label
                    htmlFor="exactdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    Created On
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-sm alt alt_right"
                      name="on"
                      id="on"
                      placeholder="Exact Date"
                      value={this.state.on}
                      onChange={this.handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>
               </div>
               
               <div className="col-md-3">
          <label
                htmlFor="ticketid"
                style={{ display: "block" }}
                className="mt-3 font-weight-bold"
              >
                Search
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="myInput"
                onChange={this.handleInputChange}
                placeholder="Search..."
                title="Type in something"
              />
              </div>

                </div>
                <div className="form-group mt-1 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-md"
                    style={{ cursor: "pointer", fontSize: "16px" }}
                  >
                    Search
                  </button>
                </div>
              </form>
              </div>
            {/* </div> */}
          </div>
                  </div>
                <div
                  id="table"
                  className="card pt-2 justify-content-center shadow px-2"
                >
                <div className="card-header bg-medium font-weight-bold text-dark">
                    WEB ANALYTICS
                    <span className="float-right" id='download' style={{ cursor: 'pointer' }} ><i className="fas fa-download "></i>
                    </span>
                </div>
                  <div className="table-responsive">
                    <table
                      className="table table-hover table-bordered table-sm text-center align-middle mb-0 text-dark home-chart"
                      id="myTable"
                    >
                      {/* <caption>Hello World!</caption> */}
                      <thead>
                        <tr>
                          <th className="table-padding">Date & Time</th>
                          <th>Location</th>
                          <th>Device</th>
                          <th>IP Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.currentLists.map((analytic, index) => {
                          return (
                            <tr key={index}>
                            <td className="table-padding">
                              {analytic.date}
                            </td>
                              {this.state.user.role == "admin" && (
                                <td
                                className="table-padding">
                                  {analytic.location}
                                </td>
                              )}
                              <td className="table-padding">{analytic.device}</td>
                              <td className="table-padding">{analytic.IP}</td>
                              </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {this.state.pageNumbers && (
              <div className="row mt-5">
                <div className="col-md-4">
                  <div className="form-group mt-1">
                    {this.state.totalLists.length > 0 && (
                      <select
                        onChange={(e) => {
                          this.setState({ numberPerPage: e.target.value });
                        }}
                        style={{ maxWidth: "180px" }}
                        name="page"
                        id="page"
                        className="custom-select custom-select-sm"
                        defaultValue="10"
                      >
                        <option value="10" >
                          10
                        </option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                    )}
                  </div>
                </div>

                <div className="col-md-8 ">
                  <div className="row  justify-content-center text-center">
                    <Pagination
                      numberPerPage={this.state.numberPerPage}
                      currentPage={this.state.currentPage}
                      totalLists={this.state.totalLists}
                      pageNumbers={this.state.pageNumbers}
                      currentLists={this.state.currentLists}
                      update={this.update}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
     
      </div>
    );
  }
}

export default withContext(webanalytics);
