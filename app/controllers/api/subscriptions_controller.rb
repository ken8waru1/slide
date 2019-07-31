class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = current_user.subscriptions
    render :index
  end

  def show
    @subscription = Subscription.find_by(id: params[:id])
    render :show
  end
  
  def create 
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = subscription_params.has_key?(:user_id) ? subscription_params[:user_id] : current_user.id;

    if @subscription.save
      render :show 
    else 
      render json: @subscription.errors.full_messages, status: 406
    end
  end

  def destroy
    @subscription = Subscription.find_by(id: params[:id])
    @subscription.destroy!
    @channel = Channel.find(@subscription.channel_id)
    if @channel.is_direct_message
      # @subscription_2 = Subscription.find_by(@channel_id)
      # @subscription_2.destroy!
      @channel.messages.each { |message| message.destroy! }
      # @channel.destroy!
    end
    render json: { }
  end

  private 
  
  def subscription_params
    params.require(:subscription).permit(:channel_id, :user_id)
  end
end
