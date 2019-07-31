import React from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions, createSubscription } from '../../actions/subscription_actions';
import { closeModal } from '../../actions/modal_actions';
import { createChannel, fetchChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const currentUser = state.session.currentUser;
  return ({
    users: Object.values(state.entities.users),
    currentUser: currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    createSubscription: (subscription) => dispatch(createSubscription(subscription))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search))