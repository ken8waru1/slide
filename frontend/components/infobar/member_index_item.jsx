import React from 'react';

const MemberIndexItem = ({ user }) => {
  return (
    <div className="member-item">
      {user.displayName}
    </div>
  )
}

export default MemberIndexItem;