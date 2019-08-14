# Slide
[Live Demo](https://slide-kh.herokuapp.com/#/)

Slide is a real-time messaging app cloned from [Slack](https://slack.com/) with a color theme inspired by [Discord](https://discordapp.com/) over a period of 10 days. Users can send messages to each other via channels that they create. 

# Features
* Secure frontend to backend user authentication using BCrypt
* Users can create channels and subscribe to channels
* Users can chat in real-time

# Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* Live Chat: Action Cable

# Live Chat

Live chat is implemented via Websockets with Action Cable, with React communicating with the Rails each time a new message is posted and that message being broadcasted to its respective channel via the subscription created. 

![](https://i.imgur.com/bwxmPh1.gif)

```js 
export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
//Every time a user enters a channel, they are live subscribed to any updates within that channel
  App[channelId] = App.cable.subscriptions.create(
    { channel: "ChatChannel", id: channelId },
    {
      received: function (data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
      }
    })
}
```

```js
  handleSubmit(e) {
    if (e.key === 'Enter') {
      //When a message is posted through the message box, it will be sent as object to the ChatChannel class defined in Rails via that class's #receive method
      App[this.props.channel].send({ message: this.state.body, user_id: this.props.currentUser.id, channel_id: this.props.channel });
      this.setState({ body: "" });
    }
  }
```

```ruby 
class ChatChannel < ApplicationCable::Channel
  def subscribed
    #Dynamically creates different subscriptions utilizing the channel ID of the message that is passed through params
    stream_from "channel-#{params['id']}:messages"
  end

  def receive(payload)
    #Here the message object is created and persisted to the database
    message = Message.create(channel_id: payload["channel_id"], body: payload["message"], user_id: payload["user_id"])
  end

  def unsubscribed
  end
end
```

```ruby
class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  
  #If the message object meets all the validations, it is then passed in as an argument to the MessageBroadcastJob class's #perform method.
  after_create_commit { MessageBroadcastJob.perform_now( self )}
end

```

```ruby 
class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    #The message is received and broadcasted only to the channel in which it was posted
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

```

