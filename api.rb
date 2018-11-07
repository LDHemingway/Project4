require 'HTTParty'
require 'pp'

class petfinder
    include HTTParty
    attr_accessor :pets

    base_uri 'http://api.petfinder.com/'
    default_params output: :json

    def initialize(pets)
        @pets = pets
    end

    def random_fact
        response = get('/')
response = HTTParty.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=30350&animal=dog')

pp response.code, response.message, response.headers.inspect

pp response["petfinder"]["pets"]["pet"].count