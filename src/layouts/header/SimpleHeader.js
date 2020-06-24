import React from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@material-ui/core'

// Misc
import LanguagePicker from 'components/LanguagePicker'
import Logo from 'components/Logo/Logo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar:{
    justifyContent: 'space-between'
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1em'
  },
}));


function SimpleHeader(withlogin) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar color="default">
          <Toolbar className={classes.bar}>
            <Logo />
            
            <Box className={classes.menu}>
              <LanguagePicker />
              {withlogin === true && <Button color="primary" variant="contained">Login</Button>}
            </Box>
      </Toolbar>
    </AppBar>
    </div>
    </>
  )
}

export default SimpleHeader
