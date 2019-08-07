import { createChannel, fetchChannel } from '../../actions/channel_actions';
import InfoBar from './infobar'
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.currentUser;
  const channel = state.entities.channels[ownProps.match.params.channelId]
  return ({
    currentUser: currentUser,
    users: Object.values(state.entities.users),
    infoBar: state.ui.infoBar,
    channel: channel,
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
  mapDispatchToProps)(InfoBar));