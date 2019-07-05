import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    email: '',
    formType: 'Login',
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => (dispatch(removeErrors()))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)