require 'open-uri'

class Api::UsersController < ApplicationController

  def index
    @users = User.all;
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :display_name, :password, :avatar)
  end

end
