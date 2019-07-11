import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import { receiveMessage } from './message_actions'

const receiveAllChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels: channels
});

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel: channel
});

const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  channelId: channelId
});

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users: users
})

export const fetchChannels = () => (dispatch) => (
  ChannelApiUtil.fetchChannels().then(channels => dispatch(receiveAllChannels(channels)))
);

export const fetchChannel = (id) => (dispatch) => (
  ChannelApiUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel) => (dispatch) => (
  ChannelApiUtil.postChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = (channel) => (dispatch) => (
  ChannelApiUtil.patchChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = (id) => (dispatch) => (
  ChannelApiUtil.deleteChannel(id).then(() => dispatch(removeChannel(id)))
);

export const fetchUsers = (id) => (dispatch) => (
  ChannelApiUtil.fetchUsers(id).then(users => dispatch(receiveAllUsers(users)))
);

export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    { channel: "ChatChannel", id: channelId },
    {
      received: function (data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
      },
      // speak: function (message) {
      //   return this.perform('speak', { message });
      // }
    })
}