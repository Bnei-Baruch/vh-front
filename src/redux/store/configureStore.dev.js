import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'redux/reducers'
import createLogger from 'redux-logger'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const router = routerMiddleware(history)

const logger = createLogger({
  level: 'info',
  collapsed: true
});


export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk, router, logger)))
    
  return store 
}
