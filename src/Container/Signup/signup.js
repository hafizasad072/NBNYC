import React, { Component } from 'react'
import LoginLayout from '../../Layout/_LoginLayout'

class Signup extends Component {
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
                    <div className="form-group">
                        <label htmlFor="login-CPassword">Confirm Password</label>
                        <input type='password' id='login-CPassword' name='password' ref={(input) => { this.getConfirmPassword = input }} className="form-control" placeholder='Password' />
                    </div>
                    <button className="btn btn-pill btn-primary d-table mx-auto" type="submit">Access Account</button>
                </form>
            </LoginLayout>
        )
    }
}
export default Signup