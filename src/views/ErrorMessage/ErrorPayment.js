import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import * as qs from 'query-string';
import I18 from 'components/I18'
import HeroSimple from 'components/HeroSimple'
import SimpleLayout from 'layouts/SimpleLayout'
import { styled } from '@material-ui/core/styles'

import {Box, Button} from '@material-ui/core'

const ButtonBox = styled(Box)({
  padding: '30px',
  marginBottom: '50px',
  display: 'flex',
  justifyContent: 'center'
});

const StyledButton = styled(Button)({
  margin: '0 20px 0 0',
});

// fetch data and update the db

function ErrorPayment() {
  const [errmsg, setErrmsg] = useState("")
  const { ordkey, paramx } = useParams();

  useEffect(()=>{
     let q = qs.parse(window.location.search);
     console.log("orderid", ordkey)
     console.log("paramX", paramx)
     const errinfo = {
      ordkey,
      paramx,
      errormsg: q.Error 
     }
     
    // axios.post('http://localhost:8185/orders/paid', q)
    axios.post('https://kli.one/api/orders/error', errinfo)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  })
  return (
    <SimpleLayout>
      
    <HeroSimple 
      title={<I18>thanksyou.failure.title</I18>}
      description={<I18>thanksyou.failure.body</I18>}
    />


    <ButtonBox>
      <Link to="/plan">
        <StyledButton variant="contained" size="large" color="primary">
          <I18>thanksyou.tryagain</I18>
        </StyledButton>
      </Link>

      <StyledButton href="mailto:help@kli.one" variant="outlined" size="large" color="default">
        <I18>thanksyou.contact</I18>
      </StyledButton>

    </ButtonBox>

  </SimpleLayout>
  )
}

export default ErrorPayment
