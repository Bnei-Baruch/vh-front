import React from 'react'

//Redux
import { setLanguage } from 'redux/actions/i18nActions'
import { setCurrency } from 'redux/actions/productActions'
import {useSelector, useDispatch} from 'react-redux'

// MUI
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Misc.
import I18 from 'components/I18'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inherit',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function LanguagePicker() {
  const classes = useStyles();
  const lang = useSelector(state => state.i18n.lang)
  const availableLangs = useSelector(state => state.i18n.availableLangs)
  const dispatch = useDispatch()

  const setLang = (value) => {
    dispatch(setLanguage(value))
    localStorage.setItem('VH_DEFAULT_LANG', value);
    if (value === "HE"){
      dispatch(setCurrency("NIS"))
      localStorage.setItem('VH_DEFAULT_CURRENCY', value);
    }    
  }

  return (
    <FormControl className={classes.root}>
    <InputLabel>
    <I18>general.language</I18>
    </InputLabel>
      <Select
        labelId="language"
        id="language"
        value={lang}
        onChange={(event, option) => setLang(option.props.value)}
      >
        {
          availableLangs.map((l, idx) => <MenuItem key={idx} value={l.short}>{l.long}</MenuItem>)
        }
    </Select>
  </FormControl>
  )
}

export default LanguagePicker
