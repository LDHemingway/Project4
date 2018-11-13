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
  padding: 50px;
`
const StyledUserContainer = styled.div`
  border: 5px;
  background: lightgray;
  margin: 0 auto;
  align-self: center;
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
    savedPet: {
      status: '',
      age: '',
      size: '',
      image_url: '',
      name: '',
      sex: '',
      id: '',
      description: '',
      animal: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    },
    mappedPets: []

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    let location = this.state.location
    let animal = this.state.animal
    let results = await axios.get(`/api/pets?location=${location}&animal=${animal}`)
    this.setState({ searchresults: results.data.petfinder.pets.pet })
    console.log('search results', this.state.searchresults[0].media.photos.photo[2].$t)
  }

  savePet = async (event) => {
    event.preventDefault()
    const savedPet = { ...this.state.savedPet }
    savedPet[event.target.name] = event.target.value
    this.setState({ savedPet })
    console.log(savedPet)
  }



  render() {
    let mappedPets = this.state.searchresults.map((pet, i) => {
      return (
        <StyledUserContainer>
          <div key={i}>
          {pet.media.photos ? 
            <img src={pet.media.photos.photo[1].$t}/> : 
            <img src='www.placecage.com/'/> }
            <div name='status' value={pet.status.$t}>
              Status: {pet.status.$t}
            </div>
            <div name='age' value={pet.age.$t}>
              Age: {pet.age.$t}
            </div>
            <div name='size' value={pet.size.$t}>
              Size: {pet.size.$t}
            </div>
            <div name='name' value={pet.name.$t}>
              Name: {pet.name.$t}
            </div>
            <div name='sex' value={pet.sex.$t}>
              Sex: {pet.sex.$t}
            </div>
            <div name='description' value={pet.description.$t}>
              Description: {pet.description.$t}
            </div>
            <div name='animal' value={pet.animal.$t}>
              Animal: {pet.animal.$t}
            </div>
            <div name='contact' value={pet.contact.city.$t}>
              City: {pet.contact.city.$t}
            </div>
            <div name='zipc' value={pet.contact.zip.$t}>
              Zip Code: {pet.contact.zip.$t}
            </div>
            <div name='email' value={pet.contact.email.$t}>
              Contact Email: {pet.contact.email.$t}
            </div>
            <button onClick={this.savePet}>Add Me To Your Favorites!</button>
          </div>
        </StyledUserContainer>
      )
    })
    return (
      <div>

        <StyledSearch>

          <form onSubmit={this.onSubmit}>
            <input type='text' name='location' value={this.state.location} onChange={this.handleChange} placeholder='Zip Code'></input>
            <select onChange={this.handleChange} value={this.state.animal} name='animal'>
              <option value="cat" onClick={this.handleChange} name="animal">Cats</option>
              <option value="dog" onClick={this.handleChange} name="animal">Dogs</option>
              <option value="rabbit" onClick={this.handleChange} name="animal">Rabbits</option>
              <option value="bird" onClick={this.handleChange} name="animal">Birds</option>
              <option value="horse" onClick={this.handleChange} name="animal">Horses</option>
            </select>
            <input type='submit' value='Search' />
          </form>
        </StyledSearch>
        <StyledMappedPets>
          {mappedPets}
        </StyledMappedPets>
      </div>

    )
  }
}
