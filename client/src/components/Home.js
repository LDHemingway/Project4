import React, { Component } from "react";
import axios from 'axios'

export default class Home extends Component {
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
    const response = await axios.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location={30308}&animal={dog}')
    return response.data
  }



  componentDidMount = async () => {
    const response = await this.getPets()
    //axios
    //set response

    const allPetsResponse = response.data.petfinder.pets
    const mappedPets = allPetsResponse.map(pet => {
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

    this.setState({ pets: mappedPets })
  }

  render() {
    return <div />;
  }
}
