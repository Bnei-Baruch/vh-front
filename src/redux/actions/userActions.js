import * as types from '../constants';
export function setPageReady(value) {
    return {
      type: types.SET_PAGE_READY,
      payload: value
    }
}
  