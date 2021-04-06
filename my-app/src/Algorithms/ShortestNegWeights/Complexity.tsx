import React from 'react';

class ShortestNegWeightsComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>For a digraph with $\mid E \mid$ edges and $\mid V \mid$ vertices, the algorithm computes the length of a shortest $v \rightarrow t$ path for every node $v$ in $\Theta(\mid E \mid \mid V \mid)$ time. Table $M$ requires $\Theta(\mid V \mid^2)$ space.</p>
      </div>
    );
  }

}

export default ShortestNegWeightsComplexity;