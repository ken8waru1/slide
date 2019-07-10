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

  // componentDidMount() {
  //   App.cable.subscriptions.create(
  //     { channel: "ChatChannel" },
  //     {
  //       received: data => {
  //         switch (data.type) {
  //           case "message":
  //             this.setState({
  //               messages: this.state.messages.concat(data.message)
  //             });
  //             break;
  //           case "messages":
  //             this.setState({ messages: data.messages });
  //             break;
  //         }
  //       },
  //       speak: function(data) { return this.perform("speak", data) },
  //       load: function() { return this.perform("load") }
  //     }
  //   );
  // }

  componentDidMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.fetchChannels(),
      this.props.fetchChannel(channelId),
      this.props.fetchUsers(channelId),
      this.props.fetchMessages(channelId),
      this.props.createChannelSubscription(channelId, this.props.receiveMessage)
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
    }
  }


  // componentDidUpdate() {
  //   this.bottom.current.scrollIntoView();
  // }

  render() {
    if (!this.state.loaded) {
      return (
        <></>
      )
    }
    const messageList = this.props.messages.map(message => {
      return (
        <MessageIndexItem message={message} />
      );
    });

    return (
      <div className="message-list">
        {messageList}
        <MessageForm channel={this.props.channel} currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default ChatRoom;
