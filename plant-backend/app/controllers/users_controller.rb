class UsersController < ApplicationController
    def index
        #    render json: Plant.all, :only => [:id, :name, :sun, :image, :water]
        render json: User.all, :include => [:plants]
        end
end
