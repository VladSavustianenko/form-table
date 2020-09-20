import React, {Component} from 'react';

import Form from './components/form'
import Table from './components/table'
import { USERS } from './data/users';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: USERS
    }

    this.reloadUsers = this.reloadUsers.bind(this)
  }

  reloadUsers(users) {
    this.setState({users: users})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Form reloadUsers={this.reloadUsers} />
          <Table />
        </div>
      </div>
    )
  }
}

export default App;
