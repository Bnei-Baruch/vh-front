import { createAction } from 'redux-actions';

export const incrementCounter= createAction('INCREMENT_COUNTER');
export const decrementCounter = createAction('DECREMENT_COUNTER');
export const defineCounter = createAction('DEFINE_COUNTER');
