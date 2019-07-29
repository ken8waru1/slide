import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <div className="rightbar">
        <a href="https://www.linkedin.com/in/ken-ha-36923218a/" className="linkedin-link-container" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ken8waru1" className="github-link-container" target="_blank"><i className="fab fa-github"></i></a>
        <Link className="channels-link" to="/channels/1">YOUR CHANNELS</Link>
      </div>
    </div>
  ) : (
      <div className="rightbar">
        <a href="https://www.linkedin.com/in/ken-ha-36923218a/" className="linkedin-link-container" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ken8waru1" className="github-link-container" target="_blank"><i className="fab fa-github"></i></a>
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