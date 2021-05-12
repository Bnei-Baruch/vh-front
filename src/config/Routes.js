import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from 'views/Home'
import Plan from 'views/Plan'
import Tos from 'views/Tos'
import Test from 'views/Test'
import ErrorPayment from 'views/ErrorMessage/ErrorPayment'
import SuccessPayment from 'views/SuccessPayment'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/plan' render={() => <Plan />} />
        <Route exact path='/tos' render={() => <Tos />} />
        <Route exact path='/payment/success' render={() => <SuccessPayment />} />
        <Route exact path='/payment/error' render={() => <ErrorPayment />} />
        <Route exact path='/payment/error/:ordkey/:paramx' render={() => <ErrorPayment />} />
        <Route exact path='/test/:id' render={() => <Test />} />
        <Route exact path='/' render={() => <Home />} />
        <Route path="*" render={() => (<Redirect to="/" />)} />          
      </Switch>
    </Router>
  )
}

export default Routes
