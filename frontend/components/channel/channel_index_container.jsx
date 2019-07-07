import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index'
import { selectAllChannels } from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  return ({
    channel: state.entities.channels[channelId],
    channels: selectAllChannels(state)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchChannels: () => dispatch(fetchChannels())
  })
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelIndex)