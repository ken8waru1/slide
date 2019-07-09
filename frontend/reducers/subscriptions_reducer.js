import { RECEIVE_ALL_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actions/subscription_actions';
import { merge } from 'lodash'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SUBSCRIPTIONS:
      return merge({}, state, action.subscriptions);
    case RECEIVE_SUBSCRIPTION:
      return merge({}, state, { [action.subscription.id]: action.subscription });
    case REMOVE_SUBSCRIPTION:
      const nextState = merge({}, state);
      delete nextState[action.subscriptionId];
      return nextState;
    default:
      return state;
  }
}