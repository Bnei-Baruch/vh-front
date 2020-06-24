import React from 'react'
import Routes from 'config/Routes'
import { Provider } from 'react-redux'
import StateLoader from 'config/StateLoader'

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/Theme';


function App(props) {
  const { store } = props

  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <StateLoader>
          <CssBaseline />
          <Routes />   
        </StateLoader>   
      </ThemeProvider>
    </Provider> 
  );
}

export default App;
