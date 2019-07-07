import React from 'react';
import ChannelIndexItem from './channel_index_item'

class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render () {
    const { channels } = this.props
    return (
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="channel-list">
            <div className="channel-header">Channels<img className="plus-circle" src={window.images.pluscircle} /></div>
            {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} currentChannel={this.props.match.params.channelId} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelIndex;