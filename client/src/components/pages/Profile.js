import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      messages: [],
      reply:false,
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
    axios
      .get("http://localhost:5000/messages/")
      .then(response => {
        this.setState({ messages: response.data });
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  replytomessage=()=>{
    this.state.reply = true;

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
        <Link to="/replytomessage">
          <button className="text-center btn btn-success form-group">
            Write message
          </button>
        </Link>

        <h1 className="text-center">Messages list</h1>
        {this.state.messages.map((message) => (
          <div className="text-center form-group">
            <div className="card text-center" style={{ width: "67.5rem" }}>
              <div className="card-body">
                <h5 key={message.id} className="card-title">To: {message.receiver}</h5>
                <p  className="card-text">{message.messageBody}</p>
                <button onClick={this.replytomessage} className="card-link btn btn-primary">Reply</button>
                <Link className="card-link" to="/editmessage">
                <button className=" btn btn-secondary">Edit</button>
                </Link>
                <button className="card-link btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      
    );
  }
}

export default Profile;
