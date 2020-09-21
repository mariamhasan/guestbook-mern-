import React, { Component } from "react";
import axios from "axios";

class ReplyToMessage extends Component {
  state = {
    receiver: "",
    messageBody: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.messageBody);
    console.log(this.state.receiver);
    const message = {
        receiver: this.state.receiver,
        messageBody: this.state.messageBody
      };
      axios
        .post("http://localhost:5000/messages/add", message)
        .then(res => console.log(res.data))
        .catch(error => {
          console.log(error);
        });
  };
  handleMessageChange = e => {
    this.setState({ messageBody: e.target.value });
  };
  handleReceiverChange = e => {
    this.setState({ receiver: e.target.value });
  };
   
  

  render() {
    return (
      <React-Fragment>
        <div className="container" style={{ marginTop: "5%" }}>
          <form className="text-center">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">To:</label>
              <input
                type="text"
                className="form-control text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter an email"
                value={this.state.receiver}
                onChange={e => {
                  this.handleReceiverChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Message</label>
              <textarea
                type="text"
                className="form-control text-center"
                id="exampleInputPassword1"
                placeholder="Write your message"
                value={this.state.messageBody}
                onChange={e => {
                  this.handleMessageChange(e);
                }}
              />
            </div>

            <button
              type="submit"
              onClick={e => {
                this.handleSubmit(e);
              }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </React-Fragment>
    );
  }
}

export default ReplyToMessage;
