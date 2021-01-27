class FavoritesController < ApplicationController
    def index
        #    render json: Plant.all, :only => [:id, :name, :sun, :image, :water]
        render json: Favorite.all, :except => [:created_at, :updated_at]
        end
end
