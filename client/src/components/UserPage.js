import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SearchBar from './SearchBar';

const StyledImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightgray;
  padding: 20px;
  width: 70%;
  margin: 0 auto;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: darkgray;
  margin: 0 auto;
  align-self: center;
  font-size: 30px;
  font-weight: 200;

  
`

export default class UserPage extends Component {
  state = {
    user: {
      name: '',
      location: '',
      id: '',
      image_url: ''
    }
  }


  getUser = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
    return response.data
  }



  componentDidMount = async () => {
  this.getUser()
  }

  render() {
    const userId = this.props.match.params.id
    return (
      <div>
        <StyledImageContainer>
        <StyledImage src={this.state.user.image_url} alt={this.state.user.name}/>
        <h4>{this.state.user.name}</h4>
        <h5>{this.state.user.location}</h5>
        <StyledLink href={`/users/${userId}/userspets`} className="btn">View Your Favorite Pets</StyledLink>
        <p>(Edit This User)</p>
        </StyledImageContainer>
        <SearchBar />
        <p>Delete This User</p>
      </div>
    )
  }
}
