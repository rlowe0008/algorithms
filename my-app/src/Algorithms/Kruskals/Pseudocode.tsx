import React from 'react';
import AlgorithmImage from './algorithm.png';

class KruskalsPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ol>
          <li>Sort edges by cost</li>
          <li>Set $T = \emptyset$</li>
          <li>For each $v \in V$: make a set for $v$.</li>
          <li>For each edge:</li>
          <ol>
            <li>Get edge $(u, v) = e_i$ from the sorted list</li>
            <li>If <code>find-set(u)</code> is not equal to <code>find-set(v)</code> (i.e. they are not in the same component):</li>
            <ol>
              <li>Store $e_i$ in $T$</li>
              <li>Make $u$ and $v$ belong to the same component via <code>union(u,v)</code>.</li>
            </ol>
          </ol>
          <li>Return $T$</li>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="Kruskal's algorithm" />
      </div>
    );
  }

}

export default KruskalsPseudocode;