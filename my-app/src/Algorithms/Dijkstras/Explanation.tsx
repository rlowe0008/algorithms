import React from 'react';
import InfoBubble from '../Common/InfoBubble';
import ExampleImage from './example.png';

class DijkstrasExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>A <b>graph</b> \(G = V, E\) consists of a set of <b>vertices</b> \(V\) and a set of <b>edges</b> \(E\) between pairs of vertices \((v_1, v_2)\). A <b>path</b> is a sequence of edges connecting a sequence of nodes.</p>
        <p><b>Single-pair shortest path problem</b>: Given some directed graph \(G=(V,E)\) and edge lengths \(l \ge 0\), source \(s \in V\), and destination in \(t \in V\), find the shortest directed path from \(s\) to \(t\).</p>
        <p><b>Single-source shortest paths problem</b>: find the shortest directed path from \(s\) to every other node. This will result in a <i>spanning tree</i>.</p>
        <p>Note that the algorithm can be applied to both directed and undirected graphs; an undirected graph can be considered as a directed graph with edges in both directions.</p>
        <p><b>Example</b> input and output:</p>
        <img src={ExampleImage} className="img-fluid" alt="An example input and output" />
        <InfoBubble title="Minimum Spanning Trees">
          <p>Dijkstra's algorithm can output a <b>spanning tree</b> $T$ of the input graph. As a priority queue of vertices is maintained, and all vertices are considered, all vertices are connected to the output tree. Also, cycles cannot be added, as if there already exists a path to some vertex, the algorithm will not create an additional path to this vertex.</p>
          <p>However, the tree is not necessarily a <i>minimum</i> spanning tree. <b>Prim's algorithm</b> involves a minor change to Dijkstra's to find Minimum Spanning Trees - for vertex $v$, the priority queue is ordered by:</p>
          <ul>
            <li>Dijkstra's: Lowest path cost $s \rightarrow v$</li>
            <li>Prim's: Lowest cost to attach $v$ to any other vertex in $T$; the lowest "attachment cost"</li>
          </ul>
        </InfoBubble>
      </div>
    );
  }

}

export default DijkstrasExplanation;