import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NavBar from "../sharedcomponents.js/NavBar";
import About from "./About";
import ScrollableAnchor from 'react-scrollable-anchor'
import Footer from "./Footer";

const StyledNav = styled.div`
    width: 100%;
    height: 70px;
    background: lightgray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    border-bottom: 1px solid darkgray;
    

    p {
      color: black;
      font-weight: 200;
      letter-spacing: 0.2em;
      text-transform: lowercase;
      margin-top: 10px;
      font-family: 'Raleway', sans-serif;
      padding-left: 20px;
      padding-right: 20px;
      text-decoration: none;
    }

    a {
      text-decoration: none;
    }

    #furbabies {
      font-size: 35px;
      padding-top: 10px;
    }

    #login {
      font-size: 20px;
      padding-top: 23px;
    }
`


const StyledForm = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: space-between;
`

const StyledFormContainer = styled.div`
  background: lightgray;
  width: 40vw;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 10px;

  h4 {
    text-align: center;
    padding-top: 40px;
    padding-bottom: -10px;
    font-size: 20px;
    color: #7e7e7f;
    text-transform: lowercase;
    letter-spacing: 0.2em;
    font-weight: 200;
  }
`
const StyledDivContainer = styled.div`
  position: relative;
  width: 100vw;

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: darkgray;
    border-radius: 15px;
  }

  :hover .overlay{
    opacity: 0.7;
  }

  .text {
    color: white;
    font-size: 3vw;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

const StyledUser = styled.span`
  width: 10vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 33.33%;
`

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  text-align: center;
`
const StyledImage = styled.img`
  width: 25vw;
  max-width: 275px;
  border-radius: 15px;
  flex: 33.33%;
`
const StyledText = styled.div`
  text-align: center;
  background: white;
  padding: 10px;
`

const StyledUserList = styled.div`
  background: lightgray;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  width: 30vw;
  flex: 33.33%;
  padding: 70px;
  margin-bottom: 100px;
`


export default class Home extends Component {
  state = {
    users: [{
      id: '',
      name: '',
      location: '',
      image_url: ''
    }],

    newUser: {
      name: '',
      id: '',
      location: '',
      image_url: ''
    },
    redirect: false
  }


  handleChange = async (event) => {
    const newUser = {...this.state.newUser}
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/api/users', this.state.newUser)
    this.setState ({ redirect: true })
  }


  getUsers = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }
  componentDidMount = async () => {
    this.getUsers()
  }
 
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={`/users/{this.props.match.params.id}`} />
      )
    }
    const userslist = this.state.users.map((user, i) => {
      return (
        <span key={i}>
        <StyledUser>
        <StyledDivContainer>
        <Link to={`/users/${user.id}`}><StyledImage src={user.image_url} alt={user.name} className="image"/>
        <div className="overlay">
          <div className="text">{user.name}</div>
        </div>
        </Link>
        </StyledDivContainer>
        </StyledUser>
        </span>
      
      )
    })
    return (
    <div>
      <StyledNav>
        <a href='/' id='furbabies'><p>Fur Babies</p></a>
        <a href='#section1' id='login'><p>Log In</p></a>
      </StyledNav>
      <About />
      <StyledFormContainer>
        <h4 id={'section1'}>Join the family!</h4>
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput type='text' name="name" placeholder='First Name' value={this.state.newUser.name} onChange={this.handleChange}/>
        <StyledInput type="text" name="location" placeholder="City, State" value={this.state.newUser.location} onChange={this.handleChange}/>
        <StyledInput type="text" name="image_url" placeholder="Image URL" value={this.state.newUser.image_url} onChange={this.handleChange}/>
        <StyledInput type="submit" value="Create New User" />
      </StyledForm>
      </StyledFormContainer>
      <StyledText>Select From List of Users</StyledText>
      <StyledUserList>
      {userslist}
      </StyledUserList>
      <Footer />
    </div>
    )
  }
}
