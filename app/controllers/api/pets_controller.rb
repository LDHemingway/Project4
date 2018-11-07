class Api::PetsController < ApplicationController
include HTTParty

def index
    res = HTTParty.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=30350&animal=dog')
    @pets = Pet.all
    render json: res
end

def show
    res = HTTParty.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=30350&animal=dog')
    @pet = [User.find(params[:id])]
    render json: res
end

end
