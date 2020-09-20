import React, {Component} from 'react'
import {Row, Label, Button, Input} from 'reactstrap'
import {Control, LocalForm, Errors} from 'react-redux-form'

import {USERS} from '../data/users'

const maxLength = len => val => !val || val.length <= len
const minLength = len => val => !val || val.length >= len
const phoneNum = val => /^[0-9\b]+$/i.test(val)
const age = val => !val || val >= 1

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: USERS,
            name: '',
            surname: '',
            phoneNum: '',
            gender: 'Male',
            age: ''
        }

        this.nameHandle = this.nameHandle.bind(this)
        this.surnameHandle = this.surnameHandle.bind(this)
        this.phonenumHandle = this.phonenumHandle.bind(this)
        this.genderHandle = this.genderHandle.bind(this)
        this.ageHandle = this.ageHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }

    nameHandle(val) {
        this.setState({name: val})
    }

    surnameHandle(val) {
        this.setState({surname: val})
    }

    phonenumHandle(val) {
        this.setState({phoneNum: val})
    }

    genderHandle(val) {
        this.setState({gender: val})
    }

    ageHandle(val) {
        this.setState({age: val})
    }

    submitHandle() {
        USERS.push({
            id: USERS.length + 1,
            name: this.state.name,
            surname: this.state.surname,
            phoneNum: this.state.phoneNum,
            gender: this.state.gender,
            age: parseInt(this.state.age)
        })
        this.setState({
            users: USERS,
            name: '',
            surname: '',
            phoneNum: '',
            gender: 'Male',
            age: ''
        })
        this.props.reloadUsers(this.state.users)
    }

    render() {
        return(
            <div className="col col-md-6 mt-5 form">
                <LocalForm onSubmit={this.submitHandle}>
                    <Row className="form-group mb-0 mt-2">
                        <Control.text
                            model=".name"
                            name="name"
                            placeholder="Input Name"
                            className="form-control rounded-pill col-md-5"
                            value={this.state.name}
                            onChange={e => this.nameHandle(e.target.value)}
                            required
                            validators={{
                                minLength: minLength(2), maxLength: maxLength(15)
                            }}
                        />
                    </Row>
                    <Row>
                        <Errors
                            model=".name"
                            show="touched"
                            className="text-danger ml-3"
                            messages={{
                                required: 'Input Name',
                                minLength: 'Too short',
                                maxLength: 'Too long'
                            }}
                        />
                    </Row>
                    <Row className="form-group mb-0 mt-2">
                        <Control.text
                            model=".surname"
                            name="surname"
                            placeholder="Input Surname"
                            className="form-control rounded-pill col-md-5"
                            value={this.state.surname}
                            onChange={e => this.surnameHandle(e.target.value)}
                            required
                            validators={{
                                 minLength: minLength(2), maxLength: maxLength(15)
                            }}
                        />
                    </Row>
                    <Row>
                        <Errors
                            model=".surname"
                            show="touched"
                            className="text-danger ml-3"
                            messages={{
                                required: 'Input Surname',
                                minLength: 'Too short',
                                maxLength: 'Too long'
                            }}
                        />
                    </Row>
                    <Row className="form-group mb-0 mt-2">
                        <Control.text
                            model=".phone"
                            name="phone"
                            placeholder="Input phone number"
                            className="form-control rounded-pill col-md-5"
                            value={this.state.phoneNum}
                            onChange={e => this.phonenumHandle(e.target.value)}
                            required
                            validators={{
                                minLength: minLength(6), maxLength: maxLength(15), phoneNum
                            }}
                        />
                    </Row>
                    <Row>
                        <Errors
                            model=".phone"
                            show="touched"
                            className="text-danger ml-3"
                            messages={{
                                required: 'Input phone number',
                                minLength: 'Too short ',
                                maxLength: 'Too long ',
                                phoneNum: 'Should contains only numbers'
                            }}
                        />
                    </Row>
                    <Row className="form-group mb-0 mt-2 ml-1" onChange={e => this.genderHandle(e.target.value)}>
                        <div className="form-check form-check-inline">
                            <Input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Male"
                                required
                            />
                            <Label className="form-check-label">Male</Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="Female"
                                required
                            />
                            <Label className="form-check-label">Female</Label>
                        </div>
                    </Row>
                    <Row className="form-group mb-0 mt-2 ml-1">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">Age&nbsp;</Label>
                            <Control.text
                                model=".age"
                                className="col-md-3 mr-4 p-0"
                                type="number"
                                name="age"
                                value={this.state.age}
                                onChange={e => this.ageHandle(e.target.value)}
                                required
                                validators={{
                                    age
                                }}
                            />
                            <Button
                                type="submit"
                                color="primary"
                            >
                                Add
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Errors
                            model=".age"
                            show="touched"
                            className="text-danger ml-3"
                            messages={{
                                required: 'Input age ',
                                age: 'Should be greater then 0'
                            }}
                        />
                    </Row>
                </LocalForm>
            </div>
        )
    }
}

export default Form
