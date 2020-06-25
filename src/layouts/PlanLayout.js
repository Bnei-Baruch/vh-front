import React from 'react'
import PageInfo from './meta/PageInfo'
import PlanHeader from './header/PlanHeader'
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

function PlanLayout(props) {
  const classes = useStyles()
  const {title, description, children} = props
  return (
    <Container className={classes.root}>
      <PageInfo 
        title={title}
        description={description}
      />

      <PlanHeader />

      <Container className={classes.main}>
        {children}
        <SimpleFooter />
      </Container> 

    </Container>
  )
}

export default PlanLayout
