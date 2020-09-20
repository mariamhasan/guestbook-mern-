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
      </div>
    );
  }
}

export default Profile;
