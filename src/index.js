import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ComponentNegotiator from './containers/ComponentNegotiator';

ReactDOM.render(
  <React.Fragment>
    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<span>Loading HellWorld...</span>}
    />

    <ComponentNegotiator
      componentName="HelloWorld"
      pendingRender={<span>Loading HellWorld...Again</span>}
    />
  </React.Fragment>,
  document.querySelector('[data-game-root]'),
);
