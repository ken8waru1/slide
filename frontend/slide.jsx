import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions'
import { fetchChannels, fetchChannel, createChannel, updateChannel, deleteChannel  } from './actions/channel_actions'
import { postChannel } from './util/channel_api_util'
import { fetchSubscriptions, createSubscription, fetchSubscription } from './actions/subscription_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
    delete window.currentUser
  }

  const store = configureStore(preloadedState);
  //TESTING START 
  // window.getState = store.getState;
  // window.signup = signup
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // window.createChannel = createChannel;
  // window.fetchChannels = fetchChannels;
  // window.fetchChannel = fetchChannel;
  // window.updateChannel = updateChannel;
  // window.deleteChannel = deleteChannel;
  // window.postChannel = postChannel;
  // window.fetchSubscriptions = fetchSubscriptions;
  // window.createSubscription = createSubscription;
  // window.fetchSubscription = fetchSubscription;
  //TESTING END

  ReactDOM.render(<Root store={store} />, root);
});