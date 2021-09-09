import * as types from '../constants';
export function setAuthentication(value) {
    return {
      type: types.SET_AUTHENTICATION,
      payload: value
    }
}
  