import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainPage from './reducers/mainPage'
import rootSaga from './sagas'

const reducers = combineReducers({
  mainPage: mainPage,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store

window.store = store
