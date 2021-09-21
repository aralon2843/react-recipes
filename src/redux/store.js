import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainPage from './reducers/mainPage';
import recipePage from './reducers/recipePage';
import search from './reducers/search';
import rootSaga from './sagas';

const reducers = combineReducers({
  mainPage,
  recipePage,
  search,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

window.store = store;
