import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) }
}

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={ (props) => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

export const AuthRoute = withRouter(connect(
  mapStateToProps
)(Auth));