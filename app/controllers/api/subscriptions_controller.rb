class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = current_user.subscriptions
    render :index
  end
  
  def create 
    @subscription = Subscription.new
    @subscription.user_id = current_user.id
  end
  
  private 
  
  def subscription_params
    params.require(:subscription).permit(:channel_id)
  end
end
