// My own MathJax component

import React from 'react';

class $ extends React.Component<{ math?: string, large?: boolean }> {

  render() {
    return `${this.props.large ? '$$' : '$'}${this.props.math ? this.props.math : this.props.children}${this.props.large ? '$$' : '$'}`;
  }

}

export default $;