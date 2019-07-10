import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  return ({
    currentUser: currentUser ? currentUser : null
  })
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);