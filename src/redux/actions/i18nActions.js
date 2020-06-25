import { createAction } from 'redux-act';

export const setLanguage= createAction('SET_LANGUAGE', (lang) => ({lang}));

