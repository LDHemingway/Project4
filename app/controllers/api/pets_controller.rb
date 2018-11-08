class Api::PetsController < ApplicationController
include HTTParty

def index
    @pets = Pet.all
    render json: @pets
    # res = HTTParty.get('http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=30350&animal=dog')
    # @pets = Pet.all
    # render json: res
end

def show
    puts "PARAMS!!!"
    puts params
    dynamic = "http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=#{params[:location]}&animal=#{params[:animal]}"
    puts dynamic
    res = HTTParty.get("http://api.petfinder.com/pet.find?format=json&key=975abed7430683f27f2e11f386b41692&location=#{params[:location]}&animal=#{params[:animal]}")
    @pet = Pet.find(params[:id])
    render json: res
end

end
