import React from 'react';

const MessageIndexItem = ({ message }) => {
  return (
    <div className="message">
      {message.body}
    </div>
  )
}

export default MessageIndexItem;