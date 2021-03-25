import React from 'react';
import $ from '../../Math';
import RecursiveInvariantProof from '../Common/RecursiveInvariant';

class BinarySearchProof extends React.Component {

  render() {
    return (
      <div>
        <RecursiveInvariantProof />
        <p>Define the invariant: at each recursive call, if $T$ is within the array and $L \le R$, then $L \le$ Index(T) $\le R$ (i.e. $T$ is within the search range).</p>
        <p>Initialisation: $L = 0, R = n - 1$, the item must be between them</p>
        <p>Maintenance: $m$ is the middle element between $L$ and $R$. If <$ math="A[m] < T" /> then $T$ must be to the right of $m$, so $T$ will still be between $L$ and $R$ if $L = m + 1$. If <$ math="A[m] > T" /> then $T$ must be to the left of $m$, so $T$ will still be between $L$ and $R$ if $R = m - 1$.</p>
        <p>Termination: $L$ and $R$ border one element, $T$, with $m = T$, so $T$ has been found.</p>
      </div>
    );
  }

}

export default BinarySearchProof;