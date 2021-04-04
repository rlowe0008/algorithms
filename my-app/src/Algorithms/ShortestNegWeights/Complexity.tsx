import React from 'react';

class ShortestNegWeightsComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>For a digraph with $E$ edges and $V$ vertices, the algorithm computes the length of a shortest $v \rightarrow t$ path for every node $v$ in $\Theta(EV)$ time. Table $M$ requires $\Theta(V^2)$ space.</p>
      </div>
    );
  }

}

export default ShortestNegWeightsComplexity;