@channels.each do |channel|
  json.set! channel.id do 
    json.extract! channel, :id, :name, :purpose, :creator_id
    json.subscribe_count channel.subscriptions.length
  end
end