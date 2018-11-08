import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import styled from 'styled-components'

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
`

export default class UserPage extends Component {
  state = {
    user: {
      name: '',
      location: '',
      id: '',
      image_url: ''
    },
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
    ]
  };

  getPets = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}/pets`)
    return response
  }

  getUser = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    return response.data
  }



  componentDidMount = async () => {
    const response = await this.getPets()
    const user = await this.getUser()
    const allPetsResponse = response.data.petfinder.pets.pet
    let mappedPets = []
    if (allPetsResponse) {
      mappedPets = allPetsResponse.map((pet, i) => {
        if (!pet.media.photos){
          console.log('this pet doesnt have photos', pet)
        }

        let images = ''
        if (pet.media && pet.media.photos && pet.media.photos.photo){
          images = pet.media.photos.photo
        }
        return {
          status: pet.status['$t'],
          age: pet.age['$t'],
          size: pet.size['$t'],
          media: images,
          id: pet.id['$t'],
          name: pet.name['$t'],
          sex: pet.sex['$t'],
          description: pet.description['$t'],
          animal: pet.animal['$t'],
          address: pet.contact.address1['$t'],
          city: pet.contact.city['$t'],
          zip: pet.contact.zip['$t'],
          phone: pet.contact.phone

        }
      })
    }


    this.setState({ pets: mappedPets, user })
  }

  render() {
    const userId = this.props.match.params.id
    return (
      <div>
        <StyledImageContainer>
        <StyledImage src={this.state.user.image_url} alt={this.state.user.name}/>
        <h4>{this.state.user.name}</h4>
        <h5>{this.state.user.location}</h5>
        </StyledImageContainer>
        <a href={`/users/${userId}/pets`} className="btn">View Your Favorite Pets</a>
        <SearchBar />
        <h1>Pets</h1>
        {this.state.pets.name}
      </div>
    )
  }
}
