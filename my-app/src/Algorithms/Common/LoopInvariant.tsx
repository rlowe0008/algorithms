import React from 'react';
import ProofTechnique from './ProofTechnique';

class LoopInvariantProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Loop invariant">
        <p>Initially, some optimality invariant holds. After each iteration, this invariant still holds, so the algorithm must be optimal.</p>
        <p><b>Initialisation</b>: the loop invariant is satisfied at the beginning of the loop.</p>
        <p><b>Maintenance</b>: if the loop invariant is true before the \(i\)th iteration, then the loop invariant will be true before the \(i+1\)st iteration.</p>
        <p><b>Termination</b>: when the loop terminates, the invariant allows us to deduce that the algorithm is correct.</p>
        <p>This is similar to induction.</p>
      </ProofTechnique>
    );
  }

}

export default LoopInvariantProof;