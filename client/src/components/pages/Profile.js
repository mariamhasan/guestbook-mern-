import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("usertoken");
    console.log(token);
    try {
      const decoded = jwt_decode(token);
      this.setState({
        userName: decoded.userName,
        email: decoded.email
      });
      console.log(decoded);
      console.log(decoded.userName);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Username</td>
                <td>{this.state.userName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="text-center btn btn-success form-group">
          Write message
        </button>
        <div className="text-center">
          <div className="card text-center" style={{ width: "67.5rem" }}>
            <div className="card-body">
              <h5 className="card-title">To: </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="card-link btn btn-primary">Reply</button>
              <button className="card-link btn btn-secondary">Edit</button>
              <button className="card-link btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
