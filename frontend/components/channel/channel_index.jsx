import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { Route, Redirect } from 'react-router-dom';
import ChannelDetailContainer from './channel_detail_container';
import ChatRoomContainer from '../chatroom/chatroom_container'

class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchSubscriptions();
  }

  render () {
    const { channels, currentUser } = this.props;
    const publicChannels = channels.filter(channel => !channel.isDirectMessage);
    const directMessages = channels.filter(channel => channel.isDirectMessage);
    const currentChannelId = this.props.match.params.channelId;
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
        </div>
        <div className="chat-box">
          <Route exact path="/channels/:channelId" component={ChannelDetailContainer} />
          <ChatRoomContainer />
        </div>
      </div>
    )
  }
}

export default ChannelIndex;