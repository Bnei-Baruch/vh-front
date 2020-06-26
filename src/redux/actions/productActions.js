import { createAction } from 'redux-act';

export const setCurrency = createAction('SET_CURRENCY', (currency) => ({currency}));
export const setCurrencyIdx= createAction('SET_CURRENCY_IDX', (index) => ({index}));
export const setProductAmount = createAction('SET_PRODUCT_AMOUNT', (amount) => ({amount}));
export const onSliderIdxChanged = createAction('ON_SLIDER_IDX_CHANGED', (sliderStepIdx) => ({sliderStepIdx}));


