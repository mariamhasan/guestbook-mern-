import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Header extends Component {
  state = {};
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>

      // <React-Fragment>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //     <a className="navbar-brand" href="">
      //       Guestbook
      //     </a>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon" />
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="nav-item active">
      //           <Link to="/register">
      //             <a className="nav-link" href="">
      //               Home <span className="sr-only">(current)</span>
      //             </a>
      //           </Link>
      //         </li>
      //         {/* <li className="nav-item">
      //           <Link to="/register">
      //             <a className="nav-link " href="">
      //               Register
      //             </a>
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to="/login">
      //             <a className="nav-link " href="">
      //               Login
      //             </a>
      //           </Link>
      //         </li> */}
      //       </ul>
      //       <form className="form-inline my-2 my-lg-0">
      //         <input
      //           className="form-control mr-sm-2"
      //           type="search"
      //           placeholder="Search"
      //           aria-label="Search"
      //         />
      //         <button
      //           className="btn btn-outline-primary my-2 my-sm-0"
      //           type="submit"
      //         >
      //           Search
      //         </button>
      //       </form>
      //     </div>
      //   </nav>
      // </React-Fragment>
    );
  }
}
export default withRouter(Header);

// export default Header;
