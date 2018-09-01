import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ComponentNegotiator from './containers/ComponentNegotiator';

ReactDOM.render(
  <React.Fragment>
    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<h2>Loading HellWorld...</h2>}
    />

    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<h2>Loading HellWorld...</h2>}
    />

    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<h2>Loading HellWorld...</h2>}
    />

    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<h2>Loading HellWorld...</h2>}
    />

    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<h2>Loading HellWorld...</h2>}
    />
  </React.Fragment>,
  document.querySelector('[data-game-root]'),
);
