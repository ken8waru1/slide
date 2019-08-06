import { createChannel, fetchChannel } from '../../actions/channel_actions';
import SideBar from './sidebar'
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.currentUser
  return ({
    currentUser: currentUser,
    users: Object.values(state.entities.users)
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
  mapDispatchToProps)(CreateDMForm));