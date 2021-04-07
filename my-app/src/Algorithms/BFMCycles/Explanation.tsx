import React from 'react';
import InfoBubble from '../Common/InfoBubble';
import ExampleImage from './example.png';
import SinkImage from './sink-example.png';
import SinkImage2 from './sink-example-2.png';

class BFMCyclesExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Let $n=$ the number of edges in the graph. Let $OPT(n,v)$ denote the length of the shortest $v \rightarrow t$ path using $\le n$ edges.</p>
        <p><b>Negative cycle</b>: directed cycle for which the sum of edge lengths is negative.</p>
        <p><b>Lemma</b>: If $OPT(n,v)=OPT(n-1,v)$ or every node $v$, then there are no negative cycles.</p>
        <p>Proof: The $OPT(n,v)$ values have converged, so a shortest $v \rightarrow t$ path must exist.</p>
        <p><b>Lemma</b>: If $OPT(n,v) \lt OPT(n-1,v)$ for some node $v$, then any shortest $v \rightarrow t$ path of length $\le n$ contains a cycle $W$, and $W$ must be a negative cycle.</p>
        <p>Proof: by contradiction. Since $OPT(n,v) \lt OPT(n-1,v)$ then the shortest $v \rightarrow t$ path $P$ must have exactly $n$ edges. By the pigeonhole principle, the path $P$ must contain a repeated node $x$. Let $W$ be any cycle in $P$; then deleting $W$ yields a $v \rightarrow t$ path with $ \lt n$ edges. Hence $W$ must be a negative cycle.</p>

        <p>Then the Bellman-Ford-Moore algorithm can be used to detect negative cycles:</p>
        <ul>
          <li>Create a sink node $t$ and connect all nodes to $t$ with a 0-length edge.</li>
          <li>$G$ has a negative cycle iff $G'$ has a negative cycle
            <ul>
              <li>Case 1: $OPT(n,v)=OPT(n-1,v)$ for <i>every</i> node $v$. Then by our lemma, there are no negative cycles.</li>
              <li>Case 2: $OPT(n,v) \lt OPT(n-1, v)$ for <i>some</i> node $v$.  From our previous lemma, we can extract a negative cycle from the $v \rightarrow t$ path (the cycle cannot contain $t$ since no edge leaves $t$).</li>
            </ul>
          </li>
        </ul>

        <InfoBubble title="Why is a sink node needed?">
          <p>Consider the following graph, on which we run the Bellman-Ford-Moore algorithm, with a target node $t$:</p>
          <img src={SinkImage} className="img-fluid" alt="Example input and output" />
          <p>For all vertices $v \in V$, $OPT(n, v)$ is the shortest $v \rightarrow t$ path using $\le n$ edges. If we then run the algorithm for an $n+1$th iteration, the algorithm will not update any $OPT$ values for any vertex, and so the negative cycle detector will output <code>FALSE</code>: looping round the negative cycle in the graph will not create a shorter path to $t$ as there is no path from the negative cycle to $t$.</p>
          <p>Creating a sink node as the new target and connecting it all nodes via an edge of 0-cost ensures that all negative cycles lead to the target, so any negative cycles within the graph will be detected. Adding this sink node will not create any new (negative) cycles as the sink node has no outgoing edges.</p>
          <img src={SinkImage2} className="img-fluid" alt="Example input and output" />
        </InfoBubble>
        <img src={ExampleImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default BFMCyclesExplanation;