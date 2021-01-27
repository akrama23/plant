require "pry"
class PlantsController < ApplicationController
    def index
    render json: Plant.all, :include => [:comments]
    end

    #need a create action and need to include :include => [:comments]
    def create
        plant = Plant.create(plant_params)
        # binding.pry
        render json: plant, :include => [:comments]
    end
    
    private
    def plant_params
        params.require(:plant).permit(:name, :sun, :image, :water)
    end

end
