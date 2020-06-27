import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'


// MUI
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  Button,
  CircularProgress
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles, styled } from '@material-ui/core/styles'

// Misc
import I18 from 'components/I18' //TODO: abstract I18 from component to layout


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10,
    marginLeft: -12,
  }
}))

const StyledButton = styled(Button)({
  margin: '20px 20px 0 0',
})

const SimpleBox = styled(Box)({
  marginTop: '20px',
  marginBottom: '40px',
})

const ErrorMsg = (props) => {
  var {display} = props
  if (display) {
    console.log(props)
    return (
      <Alert style={{maxWidth: "75%"}}severity="error"><I18>general.toscheck</I18></Alert>
    ) 
  }
  else {
    return (
      <></>
    ) 
  }
}

const handleForm = (e) =>{
  console.log(e)
}





function ProductForm() {
  const classes = useStyles()
  const user = useSelector(state => state.user)
  const lang = useSelector(state => state.i18n.lang)
  const product = useSelector(state => state.product)
  const [checked, setChecked] = useState(false)
  const [errorDiplay, setErrorDisplay] = useState(false)
  const [formDisabled, setFormDisabled] = useState(false)

  const getPelecardUrl = (checked) => {
    if (checked){
      setErrorDisplay(false)
      setFormDisabled(true)
      // axios.post('http://localhost:8185/orders/newandpay', {
      axios.post('https://virtualhome.kli.one/api/orders/newandpay', {
      // Account details
        AccountID: "-",
        FirstName: user.info.profile.firstName,
        LastName:  user.info.profile.lastName,
        Email: user.info.profile.email,
        Phone: "",
        Street: "",
        City: "",
        Postcode: "",
        State: "",
        Country: "",


        //Product details
        SKU: "40037",
        OrderLanguage: lang,
        Reference: "Membership",
        Organization: "ben2",
        UserKey: user.info.keycloak.subject,
        Currency: product.currency,
        Amount: product.amount,
        //Amount: 1,
        Type: "recurring",
        ProductType: "globalmembership",
        RecurringFreq: 30,
      
        // cancelUrl: 'http://86431566a175.ngrok.io/payment/cancel', 
        // successUrl: 'http://86431566a175.ngrok.io/payment/success', 
        // errorUrl: 'http://86431566a175.ngrok.io/payment/error'
         cancelUrl: 'https://virtualhome.kli.one/payment/cancel', 
         successUrl: 'https://virtualhome.kli.one/payment/success', 
         errorUrl: 'https://virtualhome.kli.one/payment/error'

    })
    .then(function (response) {
      console.log('plop')
      console.log(response);
      window.location.href=response.data.url;
    })
    .catch(function (error) {
      console.log(error);
    });

      console.log("doing") 
    } else {
      console.log("not doing") 
      setErrorDisplay(true)
    }
  }

  const handleTosCheckBox = (e) => {
    setChecked(!checked)
  }
  

  return (
    <>
      <SimpleBox>
        <Typography className={classes.prodSub} variant="body1" gutterBottom>
          <I18>product.desc.questions</I18>
        </Typography>
      </SimpleBox>
      
      <Typography className={classes.prodSub} style={{fontWeight: 700}}variant="body1" gutterBottom>
        <I18>details.title</I18>
      </Typography>
          
      <Grid container spacing={3}>
        <Grid item>
          <TextField 
            label={<I18>details.firstname</I18>}
            name="FirstName"
            className={classes.formfields}
            value={user.info.profile.firstName}
            onChange={ (event) => handleForm(event)} 
          />
        </Grid>
        <Grid item>
          <TextField 
            label={<I18>details.lastname</I18>}
            name="LastName"
            className={classes.formfields}
            value={user.info.profile.lastName}
            onChange={ (event) => handleForm(event)} 
          />
        </Grid>
            <Grid item>
              <TextField 
                className={classes.formfields}
                label={<I18>details.email</I18>}
                name="Email"
                disabled
                value={user.info.profile.email}
                onChange={ (event) => handleForm(event)} 
              />
              
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                checked={checked}
                color="primary"
                onClick={(e) => handleTosCheckBox(e)}
                style={{paddingTop: '5px' }}
              />
              <Typography className={classes.prodCheck} style={{fontWeight: 400}} variant="body1" component="span" gutterBottom>
                <I18>product.Iagree</I18>
                <Link to={"/tos"} target="_blank"><I18>product.tos</I18></Link>
              </Typography>

              <ErrorMsg display={errorDiplay} />

            </Grid>

          </Grid>

          <StyledButton 
            variant="contained" 
            size="large" 
            color="primary" 
            disabled={formDisabled} 
            onClick={()=>getPelecardUrl(checked)}>
            <I18>product.action.buy</I18>
            {formDisabled && <CircularProgress className={classes.buttonProgress} size={25} />}
          </StyledButton>
    </>
  )
}

export default ProductForm
