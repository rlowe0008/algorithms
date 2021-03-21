import React from 'react';
import ProofTechnique from './ProofTechnique';

class ExchangeProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Exchange argument">
        <p>Incrementally modify a solution provided by some other algorithm into the one provided by the greedy algorithm, without worsening the quality of the other algorithm’s solution. Then our algorithm’s solution is at least as good as any other solution, and is therefore at least as good as the optimal solution.</p>
        <ol>
          <li>Give the solutions of your algorithm A and the general solution O</li>
          <li>Compare greedy solution with the other solution, finding some difference:</li>
          <ul>
            <li>An element of O that is not in A and an element of A that is not in O</li>
            <li>2 consecutive elements in O that are in a different order than they are in A (an <b>inversion</b>)</li>
          </ul>
          <li>Exchange; swap the elements and argue that the solution is no worse than before. Argue that if you continue swapping, all differences between O and A are eliminated without worsening the quality of the solution.</li>
        </ol>
      </ProofTechnique>
    );
  }

}

export default ExchangeProof;