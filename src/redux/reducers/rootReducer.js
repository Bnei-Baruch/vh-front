import { combineReducers } from 'redux';
import simpleCounter from './simpleCounterReducer'
import i18n from './i18nReducer'
import product from './productReducers'
import user from './userReducer'

export default combineReducers({
  simpleCounter,
  product,
  user,
  i18n
});


