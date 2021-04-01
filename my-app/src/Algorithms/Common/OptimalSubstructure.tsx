import React from 'react';
import ProofTechnique from './ProofTechnique';

class OptimalSubstructProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Optimal substructure">
        <p>Or "from the recurrence". When we have a dynamic programming algorithm, the optimal solution is typically defined in terms of a recurrence or <b>Bellman equation</b>. Provided we can reason that the recurrence does indeed produce the optimal solution, then the algorithm will also produce the optimal solution. This is somewhat inductive - if we can assume that $OPT(n-1)$ is optimal, then we may use this to prove that $OPT(n)$ is optimal.</p>
      </ProofTechnique>
    );
  }

}

export default OptimalSubstructProof;