class ChatChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    # stream_from "some_channel"
    stream_from "chat_channel"
  end

  def speak(data)
    message = Message.create(data['message'])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
