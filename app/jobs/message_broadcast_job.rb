class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    # debugger
    ActionCable.server.broadcast "channel-#{message.channel_id}:messages", message: render_message(message)
  end

  private
  def render_message(message)
    ApplicationController.renderer.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
  end
end
