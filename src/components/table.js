import React, {Component} from 'react'

import {USERS} from '../data/users'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: USERS
        }

        this.removeHandler = this.removeHandler.bind(this)
        this.nameSort = this.nameSort.bind(this)
        this.surnameSort = this.surnameSort.bind(this)
        this.phoneSort = this.phoneSort.bind(this)
        this.genderSort = this.genderSort.bind(this)
        this.ageSort = this.ageSort.bind(this)
    }

    removeHandler(id) {
        USERS.splice(id - 1, 1)
        for (let i = 0; i < USERS.length; i++) {
            USERS[i].id = i + 1
        }
        this.setState({users: USERS})
    }

    nameSort() {
        USERS.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
        this.setState({users: USERS})
    }

    surnameSort() {
        USERS.sort((a, b) => a.surname.toLowerCase() < b.surname.toLowerCase() ? 1 : -1)
        this.setState({users: USERS})
    }

    phoneSort() {
        USERS.sort((a, b) => b.phoneNum - a.phoneNum)
        this.setState({users: USERS})
    }

    genderSort() {
        USERS.sort((a, b) => a.gender.toLowerCase() < b.gender.toLowerCase() ? 1 : -1)
        this.setState({users: USERS})
    }

    ageSort() {
        USERS.sort((a, b) => b.age - a.age)
        this.setState({users: USERS})
    }

    render() {
        return(
            <div className="col-md-6 mt-3">
                {
                    this.state.users.length
                    ?   <table>
                            <thead>
                                <th onClick={this.nameSort}>Name</th>
                                <th onClick={this.surnameSort}>Surname</th>
                                <th onClick={this.phoneSort}>Phone number</th>
                                <th onClick={this.genderSort}>Gender</th>
                                <th onClick={this.ageSort}>Age</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.reverse().map(user => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
                                            <td>{user.phoneNum}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.age}</td>
                                            <td>
                                                <span
                                                    className="btn btn-danger"
                                                    onClick={() => this.removeHandler(user.id)}
                                                >
                                                    &times;
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    : null
                }
            </div>
        )
    }
}

export default Table
