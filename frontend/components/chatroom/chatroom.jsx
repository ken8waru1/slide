import React from 'react';
import MessageForm from './message_form';
import MessageIndexItem from '../message/message_index_item'

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
     };
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
    })).then(() => window.document.getElementById('ref-bottom').scrollIntoView())
  }


  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      const channelId = this.props.match.params.channelId;
      this.props.fetchChannel(channelId)
      this.props.fetchUsers(channelId)
      this.props.fetchMessages(channelId)
      this.props.createChannelSubscription(channelId, this.props.receiveMessage)
    }
    if (this.state.loaded) {
      document.getElementById('ref-bottom').scrollIntoView()
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <></>
      )
    }
    const messageList = this.props.messages.map(message => {
      return (
        <MessageIndexItem currentUser={this.props.currentUser} message={message} users={this.props.users} />
      );
    });

    return (
      <div className="chat-body">
        <div className="chat-message-box">
          <div className="message-list-wrapper">
            <div className="message-list">
              {messageList}
              <div id='ref-bottom'></div>
            </div>
          </div>
          <MessageForm channel={this.props.channel} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
