import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchSubscriptions, createSubscription } from '../../actions/subscription_actions'
import { selectAllSubscriptions } from '../../reducers/selectors';
import ChannelIndex from './channel_index';
import { selectAllChannels } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  return ({
    currentUser: state.session.currentUser,
    channel: state.entities.channels[channelId],
    channels: selectAllChannels(state),
    subscriptions: selectAllSubscriptions(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchChannels: () => dispatch(fetchChannels()),
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelIndex)