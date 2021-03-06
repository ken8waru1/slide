import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash'

const _nullSession = { currentUser: null };

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.user })
    case LOGOUT_CURRENT_USER:
      return merge({}, state, { currentUser: null })
    default:
      return state
  }
}