import { RECEIVE_ALL_MESSAGES,RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES: 
      return action.messages;
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message })
    default:
      return state;
  }
}