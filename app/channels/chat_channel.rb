class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel-#{params['id']}:messages"
  end

  def receive(payload)
    message = Message.create(channel_id: payload["channel_id"], body: payload["message"], user_id: payload["user_id"])
  end

  def unsubscribed
  end
end
