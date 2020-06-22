import { combineReducers } from 'redux';
import simpleCounter from './simpleCounterReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  simpleCounter,
});

export default rootReducer;
