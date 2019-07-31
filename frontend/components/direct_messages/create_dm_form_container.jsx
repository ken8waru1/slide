import React from 'react';
import { createChannel, fetchChannel } from '../../actions/channel_actions';
import CreateDMForm from './create_dm_form'
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.currentUser
  return ({
    currentUser: currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(CreateDMForm))