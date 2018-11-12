import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SearchBar from './SearchBar';
import { Redirect } from 'react-router-dom'

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
  
  .button {
    text-decoration: none;
    font-size: 5vw;
    color: rgb(100, 100, 100)
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: darkgray;
  margin: 0 auto;
  align-self: center;
  font-size: 30px;
  font-weight: 200;  
`

const StyledContainerDiv = styled.div`
  text-align: center;
`
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    border: none;
    background: none;
    font-size: 10vw;
    color: darkgray;
    margin: 0 auto;
  }
  button:hover {
    color: red;
  }
`
const StyledBackground = styled.div`
#modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(50,50,55,0.5);
  display: flex;
  opacity: 1;
  transform: scale(1) translate(-50%, -50%);
  transition: transform 0.2s ease, opacity 0.2s ease;
  &.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(1) translate(-50%, -50%);
}
}
`

const StyledModal = styled.div`
button {
  margin: 10px 20px;
}
p {
  text-align: center;
}
#delete {
  color: red;
}
position: fixed;
top: 50%;
left: 50%;
transition: transform 0.2s ease, opacity 0.2s ease;
opacity: 100%;
z-index: 1010;
padding: 30px;
border-radius: 3px;
background: #fff;
transform: scale(1) translate(-50%, -50%);
width: 300px;
&.hidden {
  transition: transform 0.3s ease, opacity 0.2s ease;
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
`


export default class UserPage extends Component {
  state = {
    user: {
      name: '',
      location: '',
      id: '',
      image_url: ''
    },
    showDelete: false,
    redirect: false
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

  deleteUser = async () => {
    const userId = this.props.match.params.id
    await axios.delete(`/api/users/${userId}`)
    this.setState({ redirect: true })
  }

  showDelete = () => {
    this.setState({ showDelete: !this.state.showDelete })
  }

  render() {
    const userId = this.props.match.params.id
    if (this.state.redirect) {
      return <Redirect to={"/"} />
    }
    return (
      <div>
        <StyledImageContainer>
        <StyledImage src={this.state.user.image_url} alt={this.state.user.name}/>
        <h4>{this.state.user.name}</h4>
        <h5>{this.state.user.location}</h5>
        <StyledLink href={`/users/${userId}/userspets`} className="btn">View Your Favorite Pets</StyledLink>
        <p>(Edit This User)</p>
        <a href="/" class="button"><i class="fas fa-home"></i></a>
        </StyledImageContainer>

        <SearchBar />

        <StyledButton>
        <button id='delete' onClick={this.showDelete}><i className="far fa-trash-alt"></i></button>
        </StyledButton>
        <StyledContainerDiv>
          <StyledBackground>
            <StyledModal className={this.state.showDelete ? '' : "hidden"}>
              <p>Are you sure you want to delete "{this.state.user.name}"?</p>
              <button onClick={this.showDelete}>Cancel</button>
              <button id='delete' onClick={this.deleteUser} >Delete User</button>
            </StyledModal>
              <div id='modal-overlay'
                onClick={this.showDelete}
                className={this.state.showDelete ? '' : 'hidden'}></div>
           </StyledBackground>
          </StyledContainerDiv>
       </div>
    )
  }
}
