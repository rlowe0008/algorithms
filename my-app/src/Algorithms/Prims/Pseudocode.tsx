import React from 'react';
import $ from '../../Math';
import AlgorithmImage from './algorithm.png';

class PrimsPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>This algorithm is similar to Dijkstra's algorithm. Let $S$ be the set of "explored" nodes, initially containing just some start node $s$. At each iteration of the algorithm this is the cut that produces some cutset of edges. The minimum-cost edge from this cutset will be included in the Minimum Spanning Tree, and the vertex connected to the edge will be added to $S$.</p>
        <ol>
          <li>Initialise a set of vertices <$ math="S = \{s\}" /> for some node $s$, and the set of edges $T = \emptyset$</li>
          <li>Repeat $n-1$ times:</li>
          <ol>
            <li>Add to $t$ the min-cost edge with exactly one endpoint in $S$</li>
            <li>Add the other endpoint to $S$</li>
          </ol>
        </ol>
        <p>A typical implementation uses a priority queue, just like Dijkstra's algorithm, but this time it is sorted by the cheapest <b>attachment cost</b> between the node and the cutset.</p>
        <ol>
          <li>Set $S=\emptyset, T=\emptyset$</li>
          <li>For each $v \in V$, assign two parameters: $\pi(v) = \infty$, <$ math="\text{prev}(v) = \emptyset" />, where $\pi$ stores the attachment cost of a vertex and prev is the edge that provides that minimum attachment cost.</li>
          <li>Create a priority queue PQ of vertices sorted by $\pi$ values</li>
          <li>While PQ is not empty:</li>
          <ol>
            <li>Select the vertex $u$ with smallest attachment cost $\pi(u)$</li>
            <li>Select edge <$ math="e=\text{prev}(u)" /> in the cutset with the lowest cost</li>
            <li>Add vertex $u$ to $S$</li>
            <li>Add edge $e$ to $T$</li>
            <li>For each edge $e'=(u,v) \in E$ for all $v \not\in S$, we will update the attachment cost $\pi(v)$. So, for each node incident $v$ on $u$:</li>
            <ul>
              <li>If <$ math="c_{e'} < \pi(v)" />, set <$ math="\pi(v) = c_{e'}" />: if this edge $e'$ will be a cheaper way of connecting $v$ to the cutset, then update the priority queue. Store $prev(v)=e'$</li>
            </ul>
          </ol>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="Prim's algorithm" />
      </div>
    );
  }

}

export default PrimsPseudocode;