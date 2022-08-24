import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    const users = this.props.users;
    console.log(users);
    return (
      <div>
        User name is {users.username} !
      </div>
    )
  }
}
