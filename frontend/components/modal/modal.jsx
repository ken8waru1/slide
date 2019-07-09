import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelFormContainer from '../../components/channel/create_channel_form_container'

function Modal({ modal, closeModal, currentUser }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createChannel':
      component = <CreateChannelFormContainer currentUser={currentUser} />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const currentUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currentUserId]
  return ({
    currentUser: currentUser,
    modal: state.ui.modal
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);