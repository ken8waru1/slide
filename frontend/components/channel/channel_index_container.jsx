import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions'
import ChannelIndex from './channel_index';
import { selectAllChannels } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  return ({
    currentUser: state.entities.users[state.session.currentUserId],
    channel: state.entities.channels[channelId],
    channels: selectAllChannels(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchChannels: () => dispatch(fetchChannels()),
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelIndex)