// My own MathJax component

import React from 'react';

class $ extends React.Component<{ math?: string }> {

  render() {
    return `\\(${this.props.math ? this.props.math : this.props.children}\\)`;
  }

}

export default $;