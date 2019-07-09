require_relative './subscriptions_controller.rb'

class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all
  end

  def create 
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      Subscription.create(user_id: current_user.id, channel_id: @channel.id)
      render :show 
    else 
      render json: @channel.errors.full_messages, status: 406
    end
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    render :show
  end

  def update
    @channel = Channel.find_by(id: params[id])
    
    if @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 406
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy!
    render json: { }
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :is_direct_message, :purpose)
  end
end
