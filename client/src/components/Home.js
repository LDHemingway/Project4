import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Home extends Component {
  state = {
    users: [{
      id: '',
      name: '',
      location: '',
      image_url: ''
    }]
  }

  getPets = async () => {
    const response = await axios.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=30350&animal=dog')
    console.log(response.data)
    return response.data
  }

  getUsers = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }
  componentDidMount = async () => {
    this.getUsers()
    this.getPets()
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
    </div>
    )
  }
}
