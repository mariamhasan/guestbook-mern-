import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import Profile from "./components/pages/Profile";
import ReplyToMessage from "./components/pages/ReplyToMessage";
import EditMessage from "./components/pages/EditMessage";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/replytomessage"
            component={ReplyToMessage}
          ></Route>
          <Route exact path="/editmessage" component={EditMessage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
