import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'; // Import your reducers

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
