import React from 'react';
import MessageForm from './message_form';
import MessageIndexItem from '../message/message_index_item'

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
     };
    this.bottom = React.createRef();
  }

  componentWillMount() {
    const channelId = this.props.match.params.channelId;
    this.props.fetchMessages(channelId)
  }

  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.fetchChannels(),
      this.props.fetchChannel(channelId),
      this.props.fetchUsers(channelId),
      this.props.fetchMessages(channelId),
      this.props.createChannelSubscription(channelId, this.props.receiveMessage),
    ]).then(() => this.setState({
      loaded: true
    }))
  }


  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      const channelId = this.props.match.params.channelId;
      this.props.fetchChannel(channelId)
      this.props.fetchUsers(channelId)
      this.props.fetchMessages(channelId)
      this.props.createChannelSubscription(channelId, this.props.receiveMessage)
      delete App[prevProps.match.params.channelId]
      if (App.cable.subscriptions.subscriptions.length > 1) {
        App.cable.subscriptions.subscriptions.shift()
      }
    }
    if (this.state.loaded) {
      this.bottom.current.scrollIntoView();
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <></>
      )
    }
    const subbedChannels = this.props.subscriptions.map(subscription => subscription.channelId);
    const messageList = this.props.messages.map(message => {
      let image = ''; 
      let newMessage = Object.assign({}, message);
      if (message.body.includes('jpg')) {
        image = message.body.slice(message.body.indexOf('https'), message.body.indexOf('jpg')) + 'jpg'
        if (message.body.length > image.length) newMessage.body = message.body.replace(image, '') 
      } else if (message.body.includes('png')) {
        image = message.body.slice(message.body.indexOf('https'), message.body.indexOf('png')) + 'png'
        if (message.body.length > image.length) newMessage.body = message.body.replace(image, '') 
      } else if (message.body.includes('gif')) {
        image = message.body.slice(message.body.indexOf('https'), message.body.indexOf('gif')) + 'gif'
        if (message.body.length > image.length) newMessage.body = message.body.replace(image, '') 
      }
      return (
        <MessageIndexItem currentUser={this.props.currentUser} message={newMessage} image={image} key={message.id} users={this.props.users} />
      );
    });
    return (
      <div className="chat-body">
        <div className="chat-message-box">
          <div className="message-list-wrapper">
            <div className="message-list">
              {messageList}
              <div ref={this.bottom}></div>
            </div>
          </div>
          <MessageForm channel={this.props.channel} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
