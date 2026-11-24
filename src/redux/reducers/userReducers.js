import * as types from '../constants';

export default function reducer(state={ pageReady: false }, actions) {
  switch (actions.type) {

    case types.SET_PAGE_READY:
      return {
        ...state,
        pageReady: actions.payload
      }

    default:
      return state
  }
}
