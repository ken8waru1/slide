import React from 'react';
import { createChannel } from '../../actions/channel_actions';
import CreateChannelForm from './create_channel_form'
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    channelForm: (
      <button onClick={() => dispatch(openModal('createChannel'))}>
        Create Channel
      </button>
    ), 
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(null, mapDispatchToProps)(CreateChannelForm)