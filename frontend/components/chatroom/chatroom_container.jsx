import ChatRoom from './chatroom';
import { connect } from 'react-redux';
import { selectAllSubscriptions } from '../../reducers/selectors';
import { fetchChannels, fetchChannel, fetchUsers, createChannelSubscription } from '../../actions/channel_actions'
import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom'; 
const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    users: Object.values(state.entities.users),
    channels: Object.values(state.entities.channels),
    messages: Object.values(state.entities.messages),
    channel: ownProps.match.params.channelId,
    subscriptions: selectAllSubscriptions(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchUsers: (id) => dispatch(fetchUsers(id)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchMessages: (id) => dispatch(fetchMessages(id)),
    createChannelSubscription: (channelId, receiveMessage) => (dispatch(createChannelSubscription(channelId, receiveMessage)))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom))