import React, { Component } from 'react'
import LoginLayout from '../../Layout/_LoginLayout'
// import Aux from '../../hoc/Aux'
// import  { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux';
class Login extends Component {
  // Handle Form Submit
  onSubmitHandler = (e) => {
    var email = this.getEmail.value;
    var password = this.getPassword.value;
    var loginModel = {
      Email: email,
      Password: password
    }
    //this.props.dispatch({type:"Login_Post",data:loginModel});
    //return <Redirect to='/' />
  }
  // Handle Input Change
  // handleinputChange = event => {
  //   const { name, value } = event.target
  //   var updateuser = { ...this.state.user };
  //   updateuser[name] = value;
  //   this.setState({ user: updateuser });
  // }


  render() {
    return (
      <LoginLayout>
        <h5 className="auth-form__title text-center mb-4">Access Your Account</h5>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="login-Email">Email</label>
            <input type='text' id='login-Email' className="form-control" ref={(input) => { this.getEmail = input }} name='email' placeholder='Email' />
          </div>
          <div className="form-group">
            <label htmlFor="login-Password">Password</label>
            <input type='password' id='login-Password' name='password' ref={(input) => { this.getPassword = input }} className="form-control" placeholder='Password' />
          </div>
          <button className="btn btn-pill btn-primary d-table mx-auto" type="submit">Access Account</button>
        </form>
      </LoginLayout>

    )
  }
}

export default Login