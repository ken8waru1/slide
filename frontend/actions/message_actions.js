import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = (messages) => ({
  type: RECEIVE_ALL_MESSAGES,
  messages: messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message
});

export const fetchMessages = (channelId) => (dispatch) => (
  ChannelApiUtil.fetchMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
)

export const fetchMessage = (id) => (dispatch) => {
  ChannelApiUtil.fetchMessage(id).then(message => dispatch(receiveMessage(message)))
}