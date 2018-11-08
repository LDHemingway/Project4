import React, { Component } from 'react'
import axios from 'axios'

export default class UserPage extends Component {
    state = {
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
      const userId = this.props.id
      const response = await axios.get(`/api/users/${userId}/pets`)
        return response
      }
    
    
    
      componentDidMount = async () => {
        const response = await this.getPets()
        console.log('response', response)
    
        const allPetsResponse = response.data.petfinder.pets
        console.log(allPetsResponse, 'All pets response')
        let mappedPets = []
        if (allPetsResponse) {
        mappedPets = allPetsResponse.map((pet, i) => {
            console.log(allPetsResponse, 'All pets response')
          return {
            status: pet.status['$t'],
            age: pet.age['$t'],
            size: pet.size['$t'],
            image_url: pet.media.photos.photo['$t'],
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
    
    
        this.setState({ pets: mappedPets })
      }
    
      render() {
        return (
        <div>
          <h1>Pets</h1>
          {this.state.pets.name}
        </div>
        )
      }
    }
