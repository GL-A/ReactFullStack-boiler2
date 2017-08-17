import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './ducks/reducers';
import './index.css';
import Routes from './Routes';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const Store = applyMiddleware(promiseMiddleware())(createStore);
const rootReducer = combineReducers(reducers)

ReactDOM.render(<Provider store={Store(rootReducer)}>
  <Routes />
</Provider>, document.getElementById('root'));
