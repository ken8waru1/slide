import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions'
import { fetchChannels, fetchChannel, createChannel, updateChannel, deleteChannel  } from './actions/channel_actions'
import { postChannel } from './util/channel_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        currentUserId: window.currentUser.id
      }
    }
    delete window.currentUser
  }

  const store = configureStore(preloadedState);
  //TESTING START 
  window.getState = store.getState;
  window.signup = signup
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.createChannel = createChannel;
  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannel;
  window.updateChannel = updateChannel;
  window.deleteChannel = deleteChannel;
  window.postChannel = postChannel;
  //TESTING END

  ReactDOM.render(<Root store={store} />, root);
});