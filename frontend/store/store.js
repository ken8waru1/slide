import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;

function casino(n, k) {
  if (n === 2) return 1;
  let rounds = 0;
  let currentN = n;
  for (let i = 0; i < k; i++) {
    if (currentN % 2 === 0) {
      currentN = currentN / 2;
    } else {
      currentN = Math.floor(currentN / 2);
      rounds += 1;
    }
    rounds += 1;
  }

  return rounds + currentN - 1;
}