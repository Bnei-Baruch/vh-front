import { createReducer } from 'redux-act'
import {i18n} from 'config/i18nMap'
import { 
  setCurrency, 
  setProductAmount,
  setCurrencyIdx,
  onSliderIdxChanged 
} from '../actions/productActions';




const initialState = {
  sliderStepIdx: null,
  currency: "USD",
  amount: 10,
  selectedCurrencyIdx: 0,
  currencies: {
    "USD" : {
      minAmount: 10,
      i18nKey: 'payment.usd',
      sign: '$',
      minStepValue:1,
      maxStepValue: 100,
      stepValue: 1,
      defaultStepValue: 10
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
        amount: state.currencies[action.currency].minAmount
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
  },
  [setProductAmount]: (state, action) => {
    return (
      {
        ...state,
        amount: action.amount
      }
    )
  }
},
initialState
);