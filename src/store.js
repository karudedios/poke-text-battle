import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import history from './history';

/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

export default createStore(
  connectRouter(history)(() => ({})),
  compose(
    devTools && devTools(),
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);
