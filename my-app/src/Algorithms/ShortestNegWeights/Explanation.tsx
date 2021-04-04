import React from 'react';
import NegativeCyclesImage from './negative-cycles.png';
import NoCyclesImage from './no-cycles.png';
import ExampleImage from './example.png';
import $ from '../../Math';

class ShortestNegWeightsExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Given a weighted directed graph (where weights are potentially negative), find the shortest path from the source node $s$ to some destination node $t$, assuming there exists a path from every node to $t$.</p>
        <img src={ExampleImage} className="img-fluid" alt="Example input and output" />
        <p>Recall that Dijkstra's algorithm does not work for graphs with negative edges. Additionally, adding some constant to every edge length does not allow the algorithm to work with negative edge weights.</p>
        <p><b>Negative cycle</b>: directed cycle for which the sum of edge lengths is negative.</p>
        <p><b>Observations</b>:</p>
        <ol>
          <li>If there exists a negative cycle on the path $s \rightarrow t$ then there is no shortest $s \rightarrow t$ path (or we can take any $s \rightarrow t$ path and reduce its cost by looping around the negative cycle again, creating a shorter path).<br /><img src={NegativeCyclesImage} className="img-fluid" alt="Negative cycles" /></li>
          <li>If $G$ has no negative cycles then the shortest path will contain no cycles (or we could create a shorter path by skipping the cycle) and hence will have $\le \mid E \mid-1$ edges. <br /><img src={NoCyclesImage} className="img-fluid" alt="No cycles" /></li>
        </ol>
        <p><b>Optimal solution</b>: Let $OPT(i,v)$ denote the length of the shortest $v \rightarrow t$ path using $\le i$ edges, with a goal $OPT(\mid E \mid-1, v)$ (by the observation). Then either:</p>
        <ul>
          <li>The shortest $v \rightarrow t$ path uses $\le i-1$ edges. Then $OPT(i,v)=OPT(i-1, v)$</li>
          <li>The shortest $v \rightarrow t$ path uses exactly $i$ edges. Let $(v,w)$ be the first edge in the shortest path, then incur the cost of <$ math="l_{vw}" /> and select the best $w \rightarrow t$ path with $\le i-1$ edges. Then <$ math="OPT(i,v)=l_{vw} + OPT(i-1, w)" /></li>
          <li>In other words, the optimal path consists of the optimal first edge, plus the optimal remaining path</li>
        </ul>
      </div>
    );
  }

}

export default ShortestNegWeightsExplanation;