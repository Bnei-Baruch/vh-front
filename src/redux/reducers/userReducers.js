import * as types from '../constants';

export default function reducer(state={ authentication: false }, actions) {
  switch (actions.type) {

    case types.SET_AUTHENTICATION:
      return {
        ...state,
        authentication: actions.payload
      }

    default:
      return state
  }
}
