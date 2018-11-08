import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserPage from "./UserPage";

export default class Home extends Component {
  state = {
    users: [{
      id: '',
      name: '',
      location: '',
      image_url: ''
    }]
  }

  getUsers = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }
  componentDidMount = async () => {
    this.getUsers()
  }
 
  render() {
    const userslist = this.state.users.map((user, i) => {
      return (
        <div key={i}>
        <h4>{user.name}</h4>
        <Link to={`/users/${user.id}`}><img src={user.image_url} alt={user.name} /></Link>
        </div>
      )
    })
    return (
    <div>
      users
      {userslist}
      <UserPage 
      id={this.state.users.id}
      name={this.state.users.name}
      location={this.state.users.location}
      image_url={this.state.users.image_url}
      />
    </div>
    )
  }
}
