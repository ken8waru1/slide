@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :user_id, :channel_id, :created_at
    json.author message.author
  end
end
