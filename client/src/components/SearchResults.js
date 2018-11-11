import React, { Component } from 'react'
import axios from 'axios';

export default class SearchResults extends Component {
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
    }


    getPets = async () => {
        let location = this.props.location
        let animal = this.props.animal
        const response = await axios.get(`/api/pets?location=${location}&animal=${animal}`)
        const allPets = response.data.petfinder.pets.petfinder
        let mappedPets = []

        if (allPets) {
            mappedPets = allPets.map((pet, i) => {
                if (!pet.media.photos) {
                    console.log('this pet doesnt have photos', pet)
                }

                return {
                    status: pet.status['$t'],
                    age: pet.age['$t'],
                    size: pet.size['$t'],
                    iamge_url: pet.media.photos.photo[3],
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
        let displayPets = this.state.pets.map((pet, i) => {
            return (
                <div key={i}>
                <img src={pet.image_url} alt={pet.name} />
                <h4>{pet.name}</h4>
                <h6>{pet.age}</h6>

                </div>
            )
        })
        return (
            <div>
                {displayPets}
            </div>
    )
}

}
