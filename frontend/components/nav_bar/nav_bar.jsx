import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <div className="rightbar">
        <Link className="channels-link" to="/channels/1">YOUR CHANNELS</Link>
      </div>
    </div>
  ) : (
      <div className="rightbar">
        <Link className="login-btn" to="/login">Login</Link>
        <Link className="get-started" to="/signup">GET STARTED</Link>
      </div>
    );
  return (
    <header className="nav-bar">
      <div className="leftbar"><Link to="/"><img src={window.images.logo} /></Link></div>
      {display}
    </header>
  )
}