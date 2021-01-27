class CommentsController < ApplicationController
    def index
        #    render json: Plant.all, :only => [:id, :name, :sun, :image, :water]
        render json: Comment.all, :except => [:created_at, :updated_at]
        end
end
