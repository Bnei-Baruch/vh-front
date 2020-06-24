import React from 'react'
import {Link} from 'react-router-dom'

//MUI
import {
  Button,
  Box
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

import I18 from 'components/I18'

const ButtonBox = styled(Box)({
  padding: '30px',
  marginBottom: '50px',
  display: 'flex',
  justifyContent: 'center'
})

const StyledButton = styled(Button)({
  margin: '0 20px 0 0',
})

function DoubleCTA(props) {
  return (
    <ButtonBox>
      <Link to="/tos">
      <StyledButton variant="contained" size="large" color="primary">
        <I18>main.button.pay</I18>
      </StyledButton>
      </Link>
      <StyledButton href="mailto:virtualhome@kabbalah.info" variant="outlined" size="large" color="default">
        <I18>main.button.contact</I18>
      </StyledButton>
    </ButtonBox>
  )
}

export default DoubleCTA
