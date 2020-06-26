import React from 'react'

//Redux
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

function CurrencyPicker() {
  const classes = useStyles();
  const pdt = useSelector(state => state.product)
  const dispatch = useDispatch()

  const handleCurrency = (c) => {
    console.log(c)
    dispatch(setCurrency(c.props.value))
    localStorage.setItem('VH_DEFAULT_CURRENCY', c.props.value);
  }

  return (
    <FormControl className={classes.root}>
    <InputLabel>
      <I18>general.currency</I18>
    </InputLabel>
    <Select
      labelId="currency"
      id="currency"
      value={pdt.currency}
      onChange={(event, option) => handleCurrency(option)}
    >
      {
        pdt.availableCurrency.map((cur, idx) => <MenuItem key={idx} value={cur.currency}><I18>{cur.i18nKey}</I18></MenuItem>)
      }
    </Select>
  </FormControl>
  )
}

export default CurrencyPicker
