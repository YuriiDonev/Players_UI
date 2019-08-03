import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

// import app styles
import './assets/css/index.css';

import App from './App.js';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  compose(
    applyMiddleware(middleware, reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
