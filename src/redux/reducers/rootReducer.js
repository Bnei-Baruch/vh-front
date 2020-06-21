import { combineReducers } from 'redux';
import simpleCounter from './simpleCounter'

const rootReducer = combineReducers({
  simpleCounter,
});

export default rootReducer;
