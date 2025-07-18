import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use named export
import cartReducer from './reducers';

const store = createStore(
  cartReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;