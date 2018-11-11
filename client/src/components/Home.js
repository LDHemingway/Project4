import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledForm = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: space-between;
`

const StyledUser = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;
`

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  text-align: center;
`


export default class Home extends Component {
  state = {
    users: [{
      id: '',
      name: '',
      location: '',
      image_url: ''
    }],

    newuser: {
      name: '',
      id: '',
      location: '',
      image_url: ''
    }
  }


  handleChange = async (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  onSubmit = async (event) => {
    event.preventDefault()

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
        <StyledUser>
        <h4>{user.name}</h4>
        <Link to={`/users/${user.id}`}><img src={user.image_url} alt={user.name} /></Link>
        </StyledUser>
        </div>
      )
    })
    return (
    <div>
      Select From List of Users
      {userslist}
      OR Create New User
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput type='text' placeholder='First Name' value={this.state.newuser.name} onChange={this.handleChange}/>
        <StyledInput type="text" placeholder="City, State" value={this.state.newuser.location} onChange={this.handleChange}/>
        <StyledInput type="text" placeholder="Image URL" value={this.state.newuser.image_url} onChange={this.handleChange}/>
        <StyledInput type="submit" value="Create New User" />
      </StyledForm>
    </div>
    )
  }
}
