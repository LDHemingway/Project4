import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const StyledSearch = styled.div`
    width: 30vw;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`
const StyledMappedPets = styled.div`
  display: flex;
  align-content: space-between;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
export default class SearchBar extends Component {
  state = {
    location: '',
    animal: '',
    searchresults: [],
    pets: [
      {
          status: "",
          age: "",
          size: "",
          image_url: "",
          name: "",
          sex: "",
          id: "",
          description: "",
          animal: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          phone: ""
      }
    ],
    mappedPets: []
  
  }

  handleChange =(event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  onSubmit = async (event) => {
    event.preventDefault()
    let location = this.state.location
    let animal = this.state.animal
    let results = await axios.get(`/api/pets?location=${location}&animal=${animal}`)
    this.setState({searchresults: results.data.petfinder.pets.pet })
    console.log(this.state.searchresults)
  }



  render() {
   let mappedPets = this.state.searchresults.map((pet, i) => {
     return (
      <div key={i}>
      Status: {pet.status.$t}
      <div>
      Age: {pet.age.$t}
      </div>
      <div>
      Size: {pet.size.$t}
      </div>
      <div>
      Name: {pet.name.$t}
      </div>
      <div>
      Sex: {pet.sex.$t}
      </div>
      <div>
      Description: {pet.description.$t}
      </div>
      <div>
      {pet.animal.$t}
      </div>
      <div>
      {pet.contact.city.$t}
      </div>
      <div>
      Zip Code: {pet.contact.zip.$t}
      </div>
      <div>
      Contact Email: {pet.contact.email.$t}
      </div>
      <button>Add Me To Your Favorites!</button>
      </div>
     )
   })
    return (
    <div>
      
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
      <StyledMappedPets>
     {mappedPets}
      </StyledMappedPets>
      </div>
    
    )
  }
}
