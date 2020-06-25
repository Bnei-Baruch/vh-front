import { combineReducers } from 'redux';
import simpleCounter from './simpleCounterReducer'
import i18n from './i18nReducer'
import product from './productReducers'

export default combineReducers({
  simpleCounter,
  product,
  i18n
});


