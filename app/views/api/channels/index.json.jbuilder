@channels.each do |channel|
  json.set! channel.id do 
    json.extract! channel, :id, :name, :purpose, :creator_id, :is_direct_message
    json.subscribe_count channel.subscriptions.length
  end
end