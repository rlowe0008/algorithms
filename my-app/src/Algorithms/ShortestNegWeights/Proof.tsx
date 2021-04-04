import React from 'react';
import $ from '../../Math';
import OptimalSubstructProof from '../Common/OptimalSubstructure';

class ShortestNegWeightsProof extends React.Component {

  render() {
    return (
      <div>
        <OptimalSubstructProof />
        <p>Consider $OPT(i, v)$, which either:</p>
        <ul>
          <li>Uses $\le i-1$ edges. Then it must be the case that $OPT(i,v) = OPT(i-1, v)$</li>
          <li>Uses exactly $i$ edges. Then the optimal path consists of the optimal first edge $w$, plus the optimal remaining path: <$ math="OPT(i,v)=l_{vw} + OPT(i-1, w)" /></li>
        </ul>
        <p>We choose whichever option is cheapest, hence $OPT(i,v)$ is the cost of the optimal $v \rightarrow t$ path with $\le i$ edges.</p>
      </div>
    );
  }

}

export default ShortestNegWeightsProof;