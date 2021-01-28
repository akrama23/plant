require "pry"
class PlantsController < ApplicationController
    def index
    render json: Plant.all.to_json(plant_serializer_option)
    end

    def show 
        plant = Plant.find(params[:id])
        render json: plant.to_json(plant_serializer_option)
    end 

    #need a create action and need to include :include => [:comments]
    def create
        plant = Plant.create(plant_params)
        # binding.pry
        render json: plant, :include => [:comments]
    end

    def update
        Plant.find(params[:id]).update(plant_params)
        render json: Plant.find(params[:id])
    end 

    def destroy 
        plant = Plant.find(params[:id])
        render json: plant.destroy
    end 
    
    private
    def plant_params
        params.require(:plant).permit(:name, :sun, :image, :water)
    end

    def plant_serializer_option
        {
            :include => {
                :comments => {
                    :except => [:created_at, :updated_at]
                }
            },
            :except => [:created_at, :updated_at]
        }

    end 

end
