import React from 'react'

// MUI
import { makeStyles } from '@material-ui/core/styles'
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


function SimpleHeader() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar color="default">
          <Toolbar className={classes.bar}>
            <Typography>
              Bnei Baruch
            </Typography>
            
            <Box>
              <Button>Language</Button>
              <Button>Plop</Button>
            </Box>
      </Toolbar>
    </AppBar>
    </div>
    </>
  )
}

export default SimpleHeader
