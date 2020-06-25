import React from 'react'
import SimpleLayout from 'layouts/SimpleLayout'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {incrementCounter} from 'redux/actions/simpleCounterActions'

import {Button} from '@material-ui/core'

function Home() {
  const counter = useSelector(state => state.simpleCounter.counter)
  const dispatch = useDispatch()

  const up = () => {
    dispatch(incrementCounter())
  }

  return (
    <>
    <SimpleLayout>
       Home
       <Link to="/plan">Plan</Link>
       <h1>{counter}</h1>
       <Button 
          color="primary" 
          variant="contained"
          onClick={up}
          >+</Button>
       <Button color="primary" variant="contained">-</Button>
      </SimpleLayout>
    </>
  )
}

export default Home
    