import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import infoBarReducer from './infobar_reducer';
export default combineReducers({
  modal: modalReducer,
  infoBar: infoBarReducer
});
