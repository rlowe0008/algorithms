import React from 'react';
import ProofTechnique from './ProofTechnique';

class RecursiveInvariantProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Recursive invariant">
        <p>Initially, some optimality invariant holds. After each recursive call, this invariant still holds, so the algorithm must be optimal.</p>
        <p><b>Initialisation</b>: the recursive invariant is satisfied at the beginning of some recursive call.</p>
        <p><b>Maintenance</b>: the recursive invariant remains true after the recursive call.</p>
        <p><b>Termination</b>: when the recursion terminates, the invariant allows us to deduce that the algorithm is correct.</p>
        <p>This is the same as loop invariant but for recursive calls.</p>
      </ProofTechnique>
    );
  }

}

export default RecursiveInvariantProof;