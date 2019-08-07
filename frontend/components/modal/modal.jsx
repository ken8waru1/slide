import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelFormContainer from '../channel/create_channel_form_container';
import CreateDMFormContainer from '../direct_messages/create_dm_form_container';
function Modal({ modal, closeModal, currentUser }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createChannel':
      component = <CreateChannelFormContainer currentUser={currentUser} />;
      break;
    case 'createDM':
      component = <CreateDMFormContainer currentUser={currentUser} />
      break;
    case 'settings-menu':
      component = null;
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
  const currentUser = state.session.currentUser;
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