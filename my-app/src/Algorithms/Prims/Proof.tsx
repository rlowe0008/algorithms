import React from 'react';
import GreedyStaysAheadProof from '../Common/GreedyStaysAheadProof';
import ProofImage from './proof.png';
import $ from '../../Math';

class PrimsProof extends React.Component {

  render() {
    return (
      <div>
        <GreedyStaysAheadProof />
        <p>Assume that Prim's algorithm is not optimal. Let $S$ be the spanning tree selected by Prim's algorithm (in-order of selection), and let $E$ be the actual Minimum Spanning Tree with the longest possible prefix of selected edges from $S$. Assume that Prim's algorithm selects the same edges up to some point $i$, with $e_i = (x, y)$ being the first edge added to $S$ by Prim's algorithm that is not in $E$. Let $J$ be the cutset of vertices just before $e_i$ is selected.</p>
        <p>There must be a path from $x$ to $y$ in $E$, that does not use $e_i = (x, y)$, as $e_i \not\in E$. Let $(a, b)$ be the first edge in this path with one endpoint in $J$ and the other endpoint outside of $J$.</p>
        <img src={ProofImage} className="img-fluid" alt="Proof" />
        <p>Let $T$ be $E$ but with $(a,b)$ swapped for $(x, y)$, which is also a spanning tree of $G$. Now either:</p>
        <ul>
          <li><$ math="w((a, b)) > w((x, y))" />: Then <$ math="w(T) < w(E)" />. Contradiction: $E$ cannot be a Minimum Spanning Tree.</li>
          <li><$ math="w((a, b)) = w((x, y))" />: Then <$ math="w(T) = w(E)" />, so $T$ is also a Minimum Spanning Tree. $T$ also contains a longer prefix of selected edges from $S$ than $E$, since the first edge not in common, $(x, y)$, has been swapped into it. Contradiction of definition of $E$; repeat this process with $T$.</li>
          <li><$ math="w((a, b)) < w((x, y))" />: Then Prim's would select $(a, b)$ at the next step for edge $e_i$: Contradiction of definition of $(x, y)$.</li>
        </ul>
      </div>
    );
  }

}

export default PrimsProof;