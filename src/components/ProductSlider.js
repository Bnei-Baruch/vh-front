import React from 'react'

import { setProductAmount, onSliderIdxChanged} from 'redux/actions/productActions'
import {useSelector, useDispatch} from 'react-redux'


// MUI
import {
  Box,
  Grid,
  Typography,
  Slider
} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

//Misc
import I18 from 'components/I18' //TODO: abstract I18 from component to layout

const useStyles = makeStyles((theme) => ({
  price: {
    fontSize: '3rem', 
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  freq: {
    fontSize: '1rem', 
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 0.5
  },
  priceSub: {
    fontSize: '1.3rem', maxWidth: '85%', 
    fontWeight: 400,
    fontStyle: 'italic',
    paddingTop: '5%'
  },
}))

const PriceBox = styled(Box)({
  padding: '30px',
  textAlign: 'justify'
});

function ProductSlider() {
  const classes = useStyles()
  const currency = useSelector(state => state.product.currency)
  const currencies = useSelector(state => state.product.currencies)
  const amount = useSelector(state => state.product.amount)
  const dispatch = useDispatch()


  const onSliderIdxChanged = (sliderIdx) => {
    if (sliderIdx < currencies[currency].minAmount){
      dispatch(setProductAmount(currencies[currency].minAmount))
    } else{
      dispatch(setProductAmount(sliderIdx))
    }
      
    console.log(sliderIdx)
  }

  return (
    <>
    <Grid container>

      <Grid item md={2} sm={4} xs={10}>
        <PriceBox>
          <Typography className={classes.price} variant="h3"  gutterBottom>
            {currencies[currency].sign}{amount}
          </Typography>

           <Typography className={classes.freq} variant="subtitle1"  gutterBottom>
              <I18>product.frequency</I18>
           </Typography>
        </PriceBox>
      </Grid>


      <Grid item md={9} sm={8} xs={10}>
        <Typography className={classes.priceSub} variant="body1" gutterBottom>
          <I18>product.desc.slider.alt</I18>
        </Typography>
      </Grid>

    

      <Grid item sm={9} xs={10} style={{padding: '0 20px 0 20px'}}>
        <Slider 
          value={amount} 
          onChange={ (event, sliderIdx) => onSliderIdxChanged(sliderIdx)} 
          aria-labelledby="continuous-slider" 
          min={currencies[currency].minStepValue}
          max={currencies[currency].maxStepValue}
          step={currencies[currency].stepValue}
        />
        </Grid>
      </Grid>
    </>
  )
}

export default ProductSlider
