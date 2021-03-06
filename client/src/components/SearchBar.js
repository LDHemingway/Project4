import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const StyledSearch = styled.div`
    width: 60vw;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px;
    background: rgb(100, 100, 100);
    border-radius: 15px;

    .search {
      width: 30vw;
      height: 4vh;
      font-size: 20px;
      font-weight: 200;
      margin-right: 10px;
    }

    .dropdown {
      width: 6vw;
      height: 4vh;
      font-size: 20px;
      color: rgb(100, 100, 100);
      margin-right: 10px;
    }

    .submit {
      height: 4vh;
      font-size: 20px;
      margin-right: 10px;
      color: rgb(100, 100, 100);
    }

`

const StyledImage = styled.img`
    width: 20vw;
    border: 1px solid rgb(100, 100, 100);
`
const StyledMappedPets = styled.div`
  display: flex;
  align-content: space-between;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  margin: 10px;
`
const StyledUserContainer = styled.div`
  border: 5px;
  background: lightgray;
  align-self: center;
  width: 50vw;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
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
            <StyledImage src={pet.media.photos.photo[2].$t} alt={pet.name}/> : 
            <StyledImage src='www.placecage.com/' alt="no_pet_image"/> }
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
            <input className="search" type='text' name='location' value={this.state.location} onChange={this.handleChange} placeholder='City, State or Zip Code'></input>
            <select className="dropdown" onChange={this.handleChange} value={this.state.animal} name='animal'>
              <option value="cat" onClick={this.handleChange} name="animal">Cats</option>
              <option value="dog" onClick={this.handleChange} name="animal">Dogs</option>
              <option value="rabbit" onClick={this.handleChange} name="animal">Rabbits</option>
              <option value="bird" onClick={this.handleChange} name="animal">Birds</option>
              <option value="horse" onClick={this.handleChange} name="animal">Horses</option>
            </select>
            <input className="submit" type='submit' value='Search' />
          </form>
        </StyledSearch>
        <StyledMappedPets>
          {mappedPets}
        </StyledMappedPets>
      </div>

    )
  }
}
