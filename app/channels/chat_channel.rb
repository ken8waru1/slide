class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "channel-#{params['id']}:messages"
  end

  def speak(data)
    message = Message.create(body: data['message'], user_id: data['user_id'], channel_id: data['channel_id'])
  end

  def receive(payload)
    message = Message.create(channel_id: payload["channel_id"], body: payload["message"], user_id: payload["user_id"])
    # ActionCable.server.broadcast('messages', {message: message.body, channel_id: message.channel_id})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
