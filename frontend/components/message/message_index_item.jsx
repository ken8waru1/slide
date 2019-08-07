import React from 'react';
import moment from 'moment';

const MessageIndexItem = ({ message, users }) => {
  const user = users.find(user => user.id === message.author.id);

  return (
    <div className="message">
      <div className="chat-avatar-container">
        <img src={user.avatar ? user.avatar : window.images.djeeta} className="chat-avatar" />
      </div>
      <div className="message-contents">
        <div className="message-header">
          <div className="display-name">{message.author.display_name}</div>
          <div className="time">{moment(message.createdAt).calendar()}</div>
        </div>
        <div className="message-body">
          {message.body}
        </div> 
      </div>
    </div>
  )
}

export default MessageIndexItem;