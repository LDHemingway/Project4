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

  onSubmit = async (event) => {
    event.preventDefault()
    let location = this.state.location
    let animal = this.state.animal
    let results = await axios.get(`/api/pets?location=${location}&animal=${animal}`)
    console.log(location)
    console.log(animal)
  }

  render() {
    return (
    <StyledSearch>
       
      <form onSubmit={this.onSubmit}> 
      <input type='text' name='location' value={this.state.location} onChange={this.handleChange} placeholder='Zip Code'></input> 
      <select onChange={this.handleChange} value={this.state.animal} name='animal'>
        <option value="cats" onClick={this.handleChange} name="animal">Cats</option>
        <option value="dogs" onClick={this.handleChange} name="animal">Dogs</option>
        <option value="rabbits" onClick={this.handleChange} name="animal">Rabbits</option>
        <option value="birds" onClick={this.handleChange} name="animal">Birds</option>
        <option value="horses" onClick={this.handleChange} name="animal">Horses</option>
      </select>
      <input type='submit' value='Search'/>
      </form>
   
    

      </StyledSearch>
    )
  }
}
