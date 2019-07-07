import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL: 
      const nextState = merge({}, state);
      delete nextState[action.channelId];
      return nextState;
    default: 
      return state;
  }
}