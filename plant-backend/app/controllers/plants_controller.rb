class PlantsController < ApplicationController
    def index
    #    render json: Plant.all, :only => [:id, :name, :sun, :image, :water]
    render json: Plant.all, :except => [:created_at, :updated_at]
    end
end

# plants = Plant.all.to_json((:include => {
#     :comments => {
#         :only => [:comment, :id, :user_id]
#     })
# })
# render json: plants 
