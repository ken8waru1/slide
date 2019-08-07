import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';
import { createSubscription, deleteSubscription } from '../../actions/subscription_actions';
import { selectAllSubscriptions } from '../../reducers/selectors';
import { fetchChannel, fetchChannels } from '../../actions/channel_actions';
import { openInfoBar, closeInfoBar } from '../../actions/infobar_actions'
const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channel = state.entities.channels[channelId];

  return ({
    currentUser: state.session.currentUser,
    channel: channel,
    subscriptions: selectAllSubscriptions(state),
    infoStatus: state.ui.infoBar
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    deleteSubscription: (id) => dispatch(deleteSubscription(id)),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchChannels: () => dispatch(fetchChannels()),
    closeInfoBar: () => dispatch(closeInfoBar()),
    openInfoBar: (status) => dispatch(openInfoBar(status))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail)