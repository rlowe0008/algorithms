import React from 'react';
import AlgorithmImage from './algorithm.png';

class MergesortPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Define the <code>sort</code> function as:</p>
        <ol>
          <li>Split input into two halves $A, B$</li>
          <li>Call <code>sort(A)</code>, <code>sort(B)</code></li>
          <li>Create a new list $C$</li>
          <li>Scan $A$ and $B$ from left to right, comparing $a_i$ with $b_j$:</li>
          <ol>
            <li>$a_i \le b_j$: Remove $a_i$ from $A$ and append to $C$, as it is no larger than any remaining element in $B$.</li>
            <li>$a_i \gt b_j$: Remove $b_j$ from $B$ and append to $C$, as it is smaller than any remaining element in $A$.</li>
          </ol>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="Mergesort algorithm" />
      </div>
    );
  }

}

export default MergesortPseudocode;