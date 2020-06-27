import React from 'react'

// MUI
import {
  Box,
} from '@material-ui/core'


//Misc

function Spacer(props) {
  const { h } = props 
  return (
    <Box style={{height: `${h}px`}}>
      &nbsp;
    </Box>
  )
}

export default Spacer
