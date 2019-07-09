@messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.body message.body
    json.userId message.user_id
    json.channelId message.channel_id
  end
end
