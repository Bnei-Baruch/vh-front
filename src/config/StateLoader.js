import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setLanguage} from 'redux/actions/i18nActions'
import {setCurrency} from 'redux/actions/productActions'

function StateLoader(props) {
  // const lang = useSelector(state => state.i18n.lang)
  // const currency = useSelector(state => state.i18n.currency)
  const dispatch = useDispatch()

  useEffect(() => {
    const defaultLang = localStorage.getItem('VH_DEFAULT_LANG');
    const defaultCurrency= localStorage.getItem('VH_DEFAULT_CURRENCY');
    // Using ISO 2 Letter Language Codes
    if (defaultLang && defaultLang.length === 2) {
      dispatch(setLanguage(defaultLang))
    } else {
      // Geo IP magic
    }
    if (defaultCurrency && defaultCurrency.length === 3) {
      setCurrency(defaultCurrency)
    } else {
      // Geo IP magic
    }
    
  }, [dispatch])

  return (
    <>
      {props.children}    
    </>
  )
}

export default StateLoader
