import React from 'react';
import ChatRoomContainer from "../chatroom/chatroom_container"
import { Route } from 'react-router-dom';

class ChannelDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.state = {
      subscribeCount: this.props.subscribeCount
    }
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId).then(action =>
      this.setState({ subscribeCount: action.channel.subscribeCount})
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId != prevProps.match.params.channelId) {
      this.props.fetchChannel(this.props.match.params.channelId).then(action => {
        return (
        this.setState({subscribeCount: action.channel.subscribeCount})
        )
      }
      )
    }
  }

  handleDelete(e) {
    e.preventDefault();
    let subId;
    this.props.subscriptions.forEach(subscription => {
      if (subscription.channelId == this.props.channel.id) {
        subId = subscription.id
      }
    });

    this.props.deleteSubscription(subId);
    this.setState({ subscribeCount: this.state.subscribeCount -= 1 });
  }

  handleSubscribe(e) {
    e.preventDefault();
    this.props.createSubscription({ current_user: this.props.currentUser, channel_id: this.props.channel.id })
    this.setState({subscribeCount: this.state.subscribeCount += 1})
  }
  
  render () {
    if (!this.props.channel) {
      return(
        <></>
      )
    }

    const subbedChannels = this.props.subscriptions.map(subscription => subscription.channelId)

    return (
      <div className="chat-header">
        <div className="chat-header-info">{`#${this.props.channel.name}`}
          <div>
            <i className="far fa-user"></i>
            <span className="subscriber-count">{this.state.subscribeCount}</span>
          </div>
        </div>
        {this.props.channel && subbedChannels.includes(this.props.channel.id) ?
          <div className="delete-sub-btn-container">
            <button className="delete-sub-btn" onClick={this.handleDelete}>{ this.props.channel.isDirectMessage ? 'Leave Conversation' : 'Leave Channel' }</button>
          </div> :
          <div className="sub-btn-container">
            <button className="sub-btn" onClick={this.handleSubscribe}>{ this.props.channel.isDirectMessage ? 'Rejoin Conversation' : 'Join Channel'}</button>
          </div>
        }
      </div>
    )
  }
}
  
export default ChannelDetail