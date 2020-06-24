import { createAction } from 'redux-act';

export const setLanguage= createAction('SET_LANGUAGE', (lang) => ({lang}));
export const setCurrency = createAction('SET_CURRENCY', (currency) => ({currency}));

