import React from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'

function App(props) {
  const { store } = props

  return (
    <Provider store={store}>
      <Routes />      
    </Provider> 
  );
}

export default App;
