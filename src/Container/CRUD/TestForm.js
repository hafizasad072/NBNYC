import React, { Component } from 'react'
import Layout from '../../Layout/_Layout'
import axios from 'axios'
import './CRUD.css'
import { connect } from 'react-redux'
class TestForm extends Component {
    constructor() {
        super()
    }
    onSubmit = (event) => {
        event.preventDefault();
        let newPerson = {
            name: this.getName.value,
            email: this.getEmail.value,
            age: this.getAge.value,
            education: this.getEducation.value
        }
        this.props.dispatch({ type: 'onSubmit', data: newPerson, index: this.props.editIndex });
        this.getName.value = ''
        this.getEmail.value = ''
        this.getAge.value = ''
        this.getEducation.value = ''
    }
    editHandler = (index, e) => {
        let person = { ...this.props.persons[index] };
        this.getName.value = person.name;
        this.getEmail.value = person.email;
        this.getAge.value = person.age;
        this.getEducation.value = person.education;
        this.props.dispatch({ type: "editHandler", edit: true, editIndex: index })
    }
    deleteHandler = (index, e) => {
        this.props.dispatch({ type: 'deleteHandler', index: index });
    }
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="card">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col-md-6 col-lg-6">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Email</td>
                                                    <td>Age</td>
                                                    <td>Education</td>
                                                    <td>Action</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.persons.map((item, index, arr) =>
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.age}</td>
                                                        <td>{item.education}</td>
                                                        <td><button className="btn btn-warning" onClick={(e) => this.editHandler(index, e)}>Edit</button>{' '}<button className="btn btn-danger" onClick={(e) => this.deleteHandler(index, e)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <form onSubmit={this.onSubmit}>
                                            {this.editHiddenFiled}
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type='text' id="name" className="form-control" placeholder='Name' ref={(input) => { this.getName = input }} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type='text' id="email" className="form-control" placeholder='Email' ref={(input) => { this.getEmail = input }} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="age">Age</label>
                                                <input type='number' id="age" className="form-control" placeholder='Age' ref={(input) => { this.getAge = input }} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="education">Education</label>
                                                <input type='text' id="education" className="form-control" placeholder='Education' ref={(input) => { this.getEducation = input }} />
                                            </div>
                                            <div className="form-group">
                                                <input type='submit' className="btn btn-primary" value='submit' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        persons: state.RTForm.persons,
        edit: state.RTForm.edit,
        editIndex:state.RTForm.editIndex
    }
}
export default connect(mapStateToProps)(TestForm)