import React from 'react';

const MessageIndexItem = ({ message, currentUser, users }) => {
  // let messageAuthor; 

  // users.forEach(user => {
  //   if (user.id === message.userId) messageAuthor = user
  // })
  return (
    <div className="message">
      {/* <span>{messageAuthor.displayName}</span> */}
      {message.body}
    </div>
  )
}

export default MessageIndexItem;