import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.displayName}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
      <div className="nav-contents">
        <Link className="login-btn" to="/login">Login</Link>
        <Link className="get-started" to="/signup">Get Started</Link>
      </div>
    );
  return (
    <header className="nav-bar">
      <h1 className="logo">slide</h1>
        {display}
    </header>
  )
}