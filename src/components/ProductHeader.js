import React from 'react'

import {useSelector} from 'react-redux'

// MUI
import {
  Box,
  Typography 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//Misc
import I18 from 'components/I18' //TODO: abstract I18 from component to layout

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',    
  },
  prodTitle: {
    fontWeight: 700,
    fontSize: '2rem', 
  },
  prodSub: {
    fontSize: '1.3rem', maxWidth: '75%', 
    fontWeight: 300,
  },
}))  

function ProductHeader() {
  const classes = useStyles()
  const currency =  useSelector(state => state.product.currency)
  const currencies =  useSelector(state => state.product.currencies)
   

  return (
    <>
      <Box component="div" className={classes.product}>
        <Typography className={classes.prodTitle} variant="h1"  gutterBottom>
          <I18>product.title</I18>
        </Typography> 
        <Typography className={classes.prodSub} variant="subtitle1" gutterBottom>
          <I18 obj={{sign: currencies[currency].sign, amount: currencies[currency].minAmount}}>product.desc.short</I18>
        </Typography>
        <Typography className={classes.prodSub} variant="body1" gutterBottom>
          <I18>product.desc.long</I18>
        </Typography>
      </Box>
    </>
  )
}



export default ProductHeader
