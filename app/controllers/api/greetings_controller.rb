module Api
  class Api::GreetingsController < ApplicationController
    def index
     greeting = Greeting.order('RANDOM()').first
     render json: GreetingSerializer.new(greeting).serializable_hash.to_json
    end
  end
end

