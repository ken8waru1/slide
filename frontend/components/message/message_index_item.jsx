import React from 'react';
import moment from 'moment';

const MessageIndexItem = ({ message }) => {
  return (
    <div className="message">
      <div className="message-header">
        <div className="display-name">{message.author.display_name}</div>
        <div className="time">{moment(message.createdAt).calendar()}</div>
      </div>
      <div className="message-body">{message.body}</div>
    </div>
  )
}

export default MessageIndexItem;