import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadState } from '../Utils/LocalStorage'

class Layout extends Component {
    componentWillMount() {
        var jsonState = LoadState("state");
        if (!jsonState.IsUserAuthenticated) {
            return this.props.history.push('/');
        }
    }
    Logout = () => {
        this.props.dispatch({ type: "Logout" })
        console.log(this.props.history)
        return this.props.history.push('/Login')
    }
    render() {
        return (
            <div>
                <pre>This is Layout</pre>
                <div className="row">
                    <button className="pull-right" onClick={this.Logout}>Logout</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return{
//         Logout: dispatch({type:"Logout"})
//     }
// }
export default withRouter(connect()(Layout));