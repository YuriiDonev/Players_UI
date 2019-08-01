import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './assets/css/index.css';

import App from './App.js';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
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
