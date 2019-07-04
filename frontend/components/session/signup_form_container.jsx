import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Signup',
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => (dispatch(removeErrors()))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)