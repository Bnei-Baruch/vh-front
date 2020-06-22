import { handleActions } from 'redux-actions'
import { incrementCounter, decrementCounter, defineCounter } from '../actions/simpleCounterActions';

const initialState = {
  counter: 0, 
}

export default handleActions(
  {
    [incrementCounter]: state => ({ ...state, counter: state.counter + 1 }),
    [decrementCounter]: state => ({ ...state, counter: state.counter - 1 }),
    [defineCounter]: (state, action) => {
      return {...state, counter: parseInt(action.payload)}
    }
  },
  initialState
);