// @flow
import * as React from 'react';
import Promise from 'bluebird';
import lazyLoadingFactory from 'utils/lazyLoadingFactory';

let timer = 1000;

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

    Promise.delay(timer += 1000).then(() => {
      lazyLoadingFactory.findComponent(componentName).then((c) => {
        this.setState({ c });
      });
    });
  }

  render() {
    const { c } = this.state;
    const { render, pendingRender } = this.props;

    return c
      ? render(c)
      : pendingRender;
  }
}
