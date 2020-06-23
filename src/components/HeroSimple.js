import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {Box, Typography} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px'
  },
  introTitle: {
    fontWeight: 300,
    textAlign: 'center'
  },
  introSub: {
    fontSize: '1.3rem', maxWidth: '75%', textAlign: 'center',
    fontWeight: 300,
  },
}))

function HeroSimple(props) {
  const classes = useStyles()
  const {title, description, imgSrc, imgAlt} = props

  return (
    <div>
      <Box component="div" className={classes.hero}>
        <img src={imgSrc} alt={imgAlt} />
      <Typography className={classes.introTitle} variant="h1"  gutterBottom>
        {title}
      </Typography> 
      <Typography className={classes.introSub} variant="subtitle1" gutterBottom>
        {description}
      </Typography>
      </Box>
    </div>
  )
}

export default HeroSimple
