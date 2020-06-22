import React from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'


function App(props) {
  const { store, history } = props

  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <Routes />      
      </ConnectedRouter>      
    </Provider> 
  );
}

export default App;
