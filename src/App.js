import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
 import Login from './Container/Login/Login';
 import Signup from './Container/Signup/signup';
import TestForm from './Container/CRUD/TestForm'
const App = () => {
  return (
    <Router>
    <switch>
      <Route path="/Signup" component={Signup} ></Route>
      <Route component={Login} ></Route>
    </switch>
    <switch>
    <Route exact path="/" component={TestForm} ></Route>
    </switch>
    </Router>
  );
}

export default App;
