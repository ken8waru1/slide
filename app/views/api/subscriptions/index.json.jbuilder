@subscriptions.each do |subscription|
  json.set! subscription.id do 
    json.extract! subscription, :id, :user_id, :channel_id
  end
end