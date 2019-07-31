import React from 'react';

const SearchIndexItem = ({ user, handleClick }) => {
  return (
    <div className="search-item" onClick={(e) => handleClick(e, user)}>
      {user.displayName}
    </div>
  )
}

export default SearchIndexItem;