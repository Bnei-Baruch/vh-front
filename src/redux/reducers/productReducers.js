import { createReducer } from 'redux-act'
import {i18n} from 'config/i18nMap'
import { 
  setDefaultAmount, 
  setCurrency, 
  setCurrencyIdx,
  onSliderIdxChanged 
} from '../actions/productActions';




const initialState = {
  defaultCurrency: i18n['EN'].map.defaultCurrency.split(','), 
  sliderStepIdx: null,
  currency: "USD",
  amount: null,
  selectedCurrencyIdx: 0,
  currencies: {
    "USD" : {
      minAmount: 10,
      i18nKey: 'payment.usd',
      sign: '$',
      minStepValue:1,
      maxStepValue: 100,
      stepValue: 1,
      defaultStepValue: 35
    },
    "NIS" : {
      minAmount: 35,
      i18nKey: 'payment.nis',
      sign: '₪',
      minStepValue:1,
      maxStepValue: 350,
      stepValue: 1,
      defaultStepValue: 35
    },
    "EUR" : {
      minAmount: 9,
      i18nKey: 'payment.euro',
      sign: '€',
      minStepValue:1,
      maxStepValue: 100,
      stepValue: 1,
      defaultStepValue: 9
    },
  }, 
  availableCurrency: [{
    minAmount: 10,
    currency: 'USD',
    i18nKey: 'payment.usd',
    sign: '$',
    minStepValue:1,
    maxStepValue: 100,
    stepValue: 1,
    defaultStepValue: 10
    },
  {
    minAmount: 9,
    currency: 'EUR',
    i18nKey: 'payment.euro',
    sign: '€',
    minStepValue:1,
    maxStepValue: 100,
    stepValue: 1,
    defaultStepValue: 9
  },
  {
    minAmount: 35,
    currency: 'NIS',
    i18nKey: 'payment.nis',
    sign: '₪',
    minStepValue:1,
    maxStepValue: 350,
    stepValue: 1,
    defaultStepValue: 35
  }]
}

export default createReducer( 
{
  [setCurrency]: (state, action) => {
    return (
      { ...state, 
        currency: action.currency,
        defaultCurrency: action.currency
      }
    )
  },
  [setCurrencyIdx]: (state, action) => {
    return (
      {
        ...state,
        selectedCurrencyIdx: action.index
      }
    )
  }
},
initialState
);