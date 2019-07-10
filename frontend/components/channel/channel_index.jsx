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
    const { channels } = this.props;
    const currentChannelId = this.props.match.params.channelId;

    return (
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="logout-btn-container">
            <button onClick={this.props.logout} className="logout-btn">Logout</button>
          </div>
          <div className="channel-list">
            <div className="channel-header">Channels<img className="plus-circle" onClick={() => this.props.openModal('createChannel')} src={window.images.pluscircle} /></div>
            {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} currentChannel={currentChannelId} />)}
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