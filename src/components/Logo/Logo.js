import React from 'react'
import ColoredTree from './tree.svg'
import I18 from 'components/I18'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Box,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "65px",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '3px'

  },
  image: {
    maxHeight: "150px"
  }
}))

function Logo() {
  const classes = useStyles()

  return (
    <>
    <Box className={classes.root}>
      <img className={classes.root}src={ColoredTree} alt="BB Logo" />
      <Typography>
        <I18>main.title</I18>
      </Typography>
    </Box>
     
    </>
  )
}

export default Logo