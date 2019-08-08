import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Route } from 'react-router-dom';
import ChannelDetailContainer from './channel_detail_container';
import ChatRoomContainer from '../chatroom/chatroom_container'

class ChannelIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchSubscriptions();
  }

  render () {
    const { channels, currentUser } = this.props;
    const publicChannels = channels.filter(channel => !channel.isDirectMessage);
    const subbedChannels = this.props.subscriptions.map(subscription => subscription.channelId);
    const directMessages = channels.filter(channel => channel.isDirectMessage &&  subbedChannels.includes(channel.id));
    directMessages.forEach(dm => dm.name = dm.name.replace(currentUser.displayName, ''))
    const currentChannelId = this.props.match.params.channelId;
    const currentChannel = parseInt(this.props.match.params.channelId)
    return (
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="sidebar-top">
            <div className="workspace-info">
              <div className="workspace-name">slide</div>
              <div className="logout-btn-container">
                <i onClick={this.props.logout} className="fas fa-sign-out-alt logout-btn"></i>
              </div>
            </div>
            <div className="status-container">
              <div className="current-user-name">{currentUser.displayName}</div>
            </div>
          </div>
          <div className="channel-list">
            <div className="channel-header">Channels<img className="plus-circle" onClick={() => this.props.openModal('createChannel')} src={window.images.pluscircle} /></div>
            {publicChannels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} currentChannel={currentChannelId} />)}
          </div>

          <div className="dm-list">
            <div className="dm-header">Direct Messages<img className="plus-circle" onClick={() => this.props.openModal('createDM')} src={window.images.pluscircle} /></div>
            {directMessages.map(channel => <ChannelIndexItem key={channel.id} channel={channel} currentChannel={currentChannelId} />)}
          </div>
        </div>
        <div className="chat-box">
          <Route exact path="/channels/:channelId" component={ChannelDetailContainer} />
          {subbedChannels.includes(currentChannel) ? 
            <ChatRoomContainer />
            :
            <div className="join-container">
              <img src={window.images.yui} />
              <div className="join-message-container">
                <div className="join-message">You are viewing <span className="join-message-channel"># {this.props.channel ? this.props.channel.name : ''}</span></div>
                <div className="join-message">Join this channel to see its conversations (please)</div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ChannelIndex;