import React from 'react';
import ExampleImage from './example.png';

class DijkstrasExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>A <b>graph</b> \(G = V, E\) consists of a set of <b>vertices</b> \(V\) and a set of <b>edges</b> \(E\) between pairs of vertices \((v_1, v_2)\). A <b>path</b> is a sequence of edges connecting a sequence of nodes.</p>
        <p><b>Single-pair shortest path problem</b>: Given some directed graph \(G=(V,E)\) and edge lengths \(l \ge 0\), source \(s \in V\), and destination in \(t \in V\), find the shortest directed path from \(s\) to \(t\).</p>
        <p><b>Single-source shortest paths problem</b>: find the shortest directed path from \(s\) to every other node. This will result in a <i>spanning tree</i>.</p>
        <p>Note that the algorithm can be applied to both directed and undirected graphs; an undirected graph can be considered as a directed graph with edges in both directions.</p>
        <ul>
          <li><b>Input</b>: A weighted, directed graph with no negative edges $G = (V, E)$ and source node $s$</li>
          <li><b>Output</b>: Shortest path $s \rightarrow v$ for all vertices $v \in V$</li>
        </ul>
        <p><b>Example</b> input and output:</p>
        <img src={ExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default DijkstrasExplanation;