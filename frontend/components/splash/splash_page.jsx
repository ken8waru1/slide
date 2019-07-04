import React from 'react';

export default () => {
  return (
    <div className="splash-container">
      <div>
        <div className="asana-container">
         <img className="asana-icon" src={window.images.asana} />
        </div>

        <div className="atlassian-container">
          <img className="atlassian-icon" src={window.images.atlassian} />
        </div>
      </div>
    </div>
  )
}