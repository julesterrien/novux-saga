/* global window */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import sagas from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, createLogger()];

const store = createStore(
	combineReducers(reducers),
	composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
