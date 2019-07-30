import React from 'react';
import { fetchUsers } from '../../actions/channel_actions';
import Search from './search';
const mapStateToProps = (state, ownProps) => {
  return ({
    users: Object.values(state.entities.users)
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)