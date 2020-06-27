import React, { useEffect } from 'react'
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

function SuccessPayment() {

  useEffect(()=>{
    let q = qs.parse(window.location.search);

    // axios.post('http://localhost:8185/orders/paid', q)
    axios.post('https://virtualhome.kli.one/api/orders/paid', q)
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
        title={<I18>thanksyou.title</I18>}
        description={<I18>thanksyou.main</I18>}
      />

      <ButtonBox>
        <StyledButton href="https://galaxy.kli.one" variant="contained" size="large" color="primary">
          <I18>thanksyou.back</I18>
        </StyledButton>
      </ButtonBox>

    </SimpleLayout>
  )
}

export default SuccessPayment
