import React from 'react';
import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';
import { createSubscription, deleteSubscription } from '../../actions/subscription_actions';
import { selectAllSubscriptions } from '../../reducers/selectors';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channel = state.entities.channels[channelId];
  let subscribeCount;
  // debugger
  // channel ? subscribeCount = channel.subscribeCount : subscribeCount = 0

  return ({
    currentUser: state.entities.users[state.session.currentUserId],
    channel: channel,
    // subscribeCount: subscribeCount, 
    subscriptions: selectAllSubscriptions(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    deleteSubscription: (id) => dispatch(deleteSubscription(id)),
    fetchChannel: (id) => dispatch(fetchChannel(id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail)