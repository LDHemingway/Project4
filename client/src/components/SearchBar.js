import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const StyledSearch = styled.div`
    width: 30vw;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`

export default class SearchBar extends Component {
  state = {
    location: '',
    animal: ''
  }

  handleChange =(event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    axios.get('/api/pets',{
      location: this.state.location,
      animal: this.state.animal
    })
  }

  render() {
    return (
    <StyledSearch>
       
      <form onSubmit={this.handleSubmit}> 
      <input type='text' value={this.state.location} onChange={this.handleChange} placeholder='Zip Code'></input> 
      <select onChange={this.handleChange} value={this.state.animal} name="animals" >
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
        <option value="rabbits">Rabbits</option>
        <option value="birds">Birds</option>
        <option value="horses">Horses</option>
      </select>
      <input type='submit' value='Search' />
      </form>
   
    

      </StyledSearch>
    )
  }
}
