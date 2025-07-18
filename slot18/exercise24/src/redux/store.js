import { createStore } from 'redux';
import cartReducer from './reducers';

// Tạo Redux store
const store = createStore(
  cartReducer,
  // Thêm Redux DevTools Extension nếu có
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;