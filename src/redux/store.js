import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, storeEnhancers(
  applyMiddleware(thunk),
));

export default store;
