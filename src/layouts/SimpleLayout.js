import React from 'react'
import PageInfo from './meta/PageInfo'
import SimpleHeader from './header/SimpleHeader'
import SimpleFooter from './footer/SimpleFooter'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
  },
  main: {
    paddingTop: "100px",
    height: "100%",
    display: "block"
  }
}))

function SimpleLayout(props) {
  const classes = useStyles()
  const {title, description, direction, children} = props
  return (
    <div dir={direction}>
    <Container className={classes.root}>
      <PageInfo 
        title={title}
        description={description}
      />

      <SimpleHeader />

      <Container className={classes.main}>
        {children}
        <SimpleFooter />
      </Container> 

    </Container>
    </div>
  )
}

export default SimpleLayout
