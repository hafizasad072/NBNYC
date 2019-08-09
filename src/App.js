import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Container/Login/Login';
import Signup from './Container/Signup/signup';
import TestForm from './Container/CRUD/TestForm'
import { Redirect } from 'react-router-dom'
const App = (props) => {
  //var HomePage = "";
  //if (!User.IsUserAuthenticated) {
  //   HomePage = <Router>
  //     <switch>
  //       <Route path="/Signup" component={Signup} ></Route>
  //       <Route path="/" component={Login} ></Route>
  //       <Route exact path="/home" component={TestForm} ></Route>
  //     </switch>
  //   </Router>
  // }
  // else {
  //   HomePage = <Router>
  //     <switch>
  //       <Route exact path="/home" component={TestForm} ></Route>
  //     </switch>
  //   </Router>
  // }
  let User = JSON.parse(localStorage.getItem("state"));
  var defaultpage = "";
  //this.props.location
  if (User.IsUserAuthenticated) {
    defaultpage = <Redirect exact from="/" to="/Home" />
  }
  else {
    defaultpage = <Redirect exact from="/" to="/Login" />
  }
  return (
    // <Router>
    // <switch>
    //   <Route path="/Signup" component={Signup} ></Route>
    //   <Route component={Login} ></Route>
    // </switch>
    // <switch>
    // <Route exact path="/Home" component={TestForm} ></Route>
    // </switch>
    // </Router>
    <div>
      <Router>
        <switch>
          <Route path="/Signup" component={Signup} ></Route>
          <Route path="/Login" component={Login} ></Route>
          <Route exact path="/Home" component={TestForm} ></Route>
          <Route exact path="/" component={TestForm} ></Route>
        </switch>
        {defaultpage}
      </Router>

    </div>
  );
}

export default App;
