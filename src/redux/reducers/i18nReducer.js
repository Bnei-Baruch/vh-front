import { createReducer } from 'redux-act'
import { setLanguage } from '../actions/i18nActions';
import {i18n} from 'config/i18nMap';

const initialState = {
  lang: "EN", 
  direction: i18n['EN'].map.direction,
  availableLangs: Object.keys(i18n).map(lang => ({ short: lang, long: i18n[lang].lang})),
  dictionary: i18n['EN'].map
}

export default createReducer(
  {
    [setLanguage]: (state, action) => { 
      return(
        {...state, 
          lang:action.lang,
          dictionary: i18n[action.lang].map,
          direction: i18n[action.lang].map.direction,
          defaultCurrency: i18n[action.lang].map.defaultCurrency.split(',')
        }
      )      
    },
  },
  initialState
);