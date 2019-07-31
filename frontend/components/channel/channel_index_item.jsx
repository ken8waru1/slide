import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({channel, currentChannel}) => { 
  return (
  <Link className="channel-name" to={`/channels/${channel.id}`}>
    <div className={ !channel.isDirectMessage ? "channel-name-container" : "dm-name-container"} id={channel.id == currentChannel ? "selected-channel" : "" }>
        {channel.name}
    </div>
  </Link>
  )
}

export default ChannelIndexItem;