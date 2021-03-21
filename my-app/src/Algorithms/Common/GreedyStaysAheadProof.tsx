import React from 'react';
import ProofTechnique from './ProofTechnique';

class GreedyStaysAheadProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Greedy stays ahead">
        <p>Generally a greedy algorithm works by selecting a candidate in some greedy way and adding it to the solution if it does not corrupt it. To prove this is correct we show that partial solutions of the greedy algorithm stay ahead of partial solutions from all other algorithms.</p>
        <ol>
          <li>Give the partial solutions of your algorithm and a general solution</li>
          <li>Find a measure of algorithm effectiveness (number of items in the solution? Cost of exploring a graph? etc)</li>
          <li>Prove greedy stays ahead: up to some \(r \le k\) solutions are equal. Then, by induction, prove that our solution is at least as good as the other solution for \(r+1\).</li>
          <li>Since greedy stays ahead (with the given measure), the final output is optimal</li>
        </ol>
      </ProofTechnique>
    );
  }

}

export default GreedyStaysAheadProof;