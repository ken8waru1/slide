import * as ChannelApiUtil from '../util/channel_api_util';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = (messages) => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  messages: messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message
});

export const fetchMessages = (channelId) => (dispatch) => (
  ChannelApiUtil.fetchMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
)

export const fetchMessage = (message) => (dispatch) => {
  ChannelApiUtil.fetchMessage(message).then(message => dispatch(receiveMessage(message)))
}