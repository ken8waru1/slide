import * as SubscriptionApiUtil from '../util/subscription_api_util';
export const RECEIVE_ALL_SUBSCRIPTIONS = 'RECEIVE_ALL_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

const receiveAllSubscriptions = (subscriptions) => ({
  type: RECEIVE_ALL_SUBSCRIPTIONS,
  subscriptions: subscriptions
});

const receiveSubscription = (subscription) => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription: subscription
});

const removeSubscription = (subscriptionId) => ({
  type: REMOVE_SUBSCRIPTION,
  subscriptionId: subscriptionId
});

export const fetchSubscriptions = () => (dispatch) => (
  SubscriptionApiUtil.fetchSubscriptions().then(subscriptions => dispatch(receiveAllSubscriptions(subscriptions)))
);

export const fetchSubscription = (id) => (dispatch) => (
  SubscriptionApiUtil.fetchSubscription(id).then(subscription => dispatch(receiveSubscription(subscription)))
);

export const createSubscription = (subscription) => (dispatch) => (
  SubscriptionApiUtil.postSubscription(subscription).then(subscription => dispatch(receiveSubscription(subscription)))
);

export const deleteSubscription = (id) => (dispatch) => (
  SubscriptionApiUtil.deleteSubscription(id).then(() => dispatch(removeSubscription(id)))
)