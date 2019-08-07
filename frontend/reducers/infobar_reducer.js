import { OPEN_INFOBAR, CLOSE_INFOBAR } from '../actions/infobar_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_INFOBAR:
      return action.status;
    case CLOSE_INFOBAR:
      return null;
    default:
      return state;
  }
}