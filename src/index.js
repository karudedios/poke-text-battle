import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './history';

import ComponentNegotiator from './containers/ComponentNegotiator';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <ComponentNegotiator
          componentName="HelloWorld"
          pendingRender={<h2>Loading HelloWorld Component...</h2>}
        />

        <ComponentNegotiator
          componentName="HelloWorld"
          pendingRender={<h2>Loading HelloWorld Component...</h2>}
        />

        <ComponentNegotiator
          componentName="HelloWorld"
          pendingRender={<h2>Loading HelloWorld Component...</h2>}
        />

        <ComponentNegotiator
          componentName="HelloWorld"
          pendingRender={<h2>Loading HelloWorld Component...</h2>}
        />

        <ComponentNegotiator
          componentName="HelloWorld"
          pendingRender={<h2>Loading HelloWorld Component...</h2>}
        />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('[data-game-root]'),
);
