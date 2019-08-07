json.extract! channel, :id, :name, :purpose, :creator_id, :is_direct_message
json.subscribe_count channel.subscriptions.length
json.subscribers channel.subscribed_users