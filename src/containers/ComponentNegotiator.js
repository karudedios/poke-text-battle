// @flow
import * as React from 'react';
import lazyLoadingFactory from 'utils/lazyLoadingFactory';

type PropTypes = {
  componentName: String,
  pendingRender?: React.Component,
  render?: (React.Component) => React.Component,
};

type State = {
  c: React.Component | undefined
};

export default class ComponentNegotiator extends React.Component<PropTypes, State> {
  static defaultProps = {
    render: React.createElement,
    pendingRender: (<span />),
  }

  constructor(...args) {
    super(...args);

    this.state = {
      c: undefined,
    };
  }

  componentDidMount() {
    const { componentName } = this.props;

    if (lazyLoadingFactory.has(componentName)) {
      this.setState({ c: lazyLoadingFactory.get(componentName) });
    } else {
      lazyLoadingFactory.findComponent(componentName).then((c) => {
        this.setState({ c });
      });
    }
  }

  render() {
    const { c } = this.state;
    const { render, pendingRender } = this.props;

    return c
      ? render(c)
      : pendingRender;
  }
}
