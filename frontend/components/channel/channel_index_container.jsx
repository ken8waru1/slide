import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index'
import { selectAllChannels } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  return ({
    channel: state.entities.channels[channelId],
    channels: selectAllChannels(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchChannels: () => dispatch(fetchChannels()),
    openModal: modal => dispatch(openModal(modal))
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelIndex)