import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from 'views/Home'
import Plan from 'views/Plan'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact from='/plan' render={() => <Plan />} />
        <Route exact from='/' render={() => <Home />} />
        <Route path="*" render={() => (<Redirect to="/" />)} />          
      </Switch>
    </Router>
  )
}

export default Routes
