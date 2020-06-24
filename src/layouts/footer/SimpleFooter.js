import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import I18 from 'components/I18'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar:{
    justifyContent: 'space-between'
  },
  title: {
    flexGrow: 1,
  },
}));

function SimpleFooter() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography>
        <Link to="/tos"><I18>product.tos</I18></Link>
      </Typography>
    </Box>
  )
}

export default SimpleFooter
