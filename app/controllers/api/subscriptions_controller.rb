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
    @subscription.user_id = current_user.id

    if @subscription.save
      render :show 
    else 
      render json: @subscription.errors.full_messages, status: 406
    end
  end

  def destroy
    @subscription = Subscription.find_by(id: params[:id])
    @subscription.destroy!
    render json: { }
  end

  private 
  
  def subscription_params
    params.require(:subscription).permit(:channel_id, :user_id)
  end
end
