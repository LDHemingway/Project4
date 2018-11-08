import React, { Component } from 'react'
import axios from 'axios'

export default class FavoritesPage extends Component {
    state = {
        pets: [
            {
                name: '',
                location: '',
                animal: '',
                breed: '',
                size: '',
                sex: '',
                age: ''
            }
        ]
    }

    getPets = async () => {
        const userId = this.props.match.params.id
        const response = await axios.get(`/api/users/${userId}/pets`)
        this.setState({pets: response.data})
    }

    componentDidMount = async () => {
        this.getPets()
    }

  render() {
    const allPets = this.state.pets.map((pet, i) => {
        return( 
            <h1 key={i}>{pet.breed}</h1> 
            // location={pet.location} animal={pet.animal} breed={pet.breed} size={pet.size} sex={pet.sex} age={pet.age}
        )
    })

    return (
      <div>
          <h1>Your Faves</h1>
        {allPets}
      </div>
    )
  }
}
