import { combineReducers } from 'redux';
import simpleCounter from './simpleCounterReducer'
import i18n from './i18nReducer'

export default combineReducers({
  simpleCounter,
  i18n
});


