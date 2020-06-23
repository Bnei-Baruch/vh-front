import { createStore, applyMiddleware} from 'redux'
import rootReducer from 'redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )
  return store 
}
