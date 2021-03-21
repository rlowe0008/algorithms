import React from 'react';
import InfoBubble from './InfoBubble';
import SpanningTreeImage from './spanning-tree.png';
import MSTImage from './mst.png';
import $ from '../../Math';

class MinimumSpanningTree extends React.Component {

  render() {
    return (
      <InfoBubble title="Minimum Spanning Trees">
        <p><b>Spanning tree</b>: Let $H=(V,T)$ be a subgraph of an undirected graph $G=(V, E)$. $H$ is a spanning tree of $G$ if (and only if) $H$ is both acyclic and connected.</p>
        <p>Then:</p>
        <ul>
          <li>$H$ is connected and has $\mid V \mid - 1$ edges</li>
          <li>$H$ is acyclic and has $\mid V \mid - 1$ edges</li>
          <li>$H$ is minimally connected: removing any edge disconnects it</li>
          <li>$H$ is maximally acyclic: adding any edge creates a cycle </li>
        </ul>
        <img src={SpanningTreeImage} className="img-fluid" alt="Spanning trees" />
        <p><b>Weighted graph</b>: a graph $G=(V,E)$ where every edge $e$ has some _cost_ $c_e$.</p>
        <p><b>Minimum spanning tree</b>: Given a connected, undirected, weighted graph, a minimum spanning tree $(V, T)$ is a spanning tree of $G$ such that the sum of the edge costs in $T$ is minimised.</p>
        <img src={MSTImage} className="img-fluid" alt="Minimum Spanning Tree" />
        <p><b>Cayley's Theorem</b>: The complete graph on $n$ nodes has <$ math="n^{n-2}" /> spanning trees, so it is infeasible to find the Minimum Spanning Tree of a graph by brute-force.</p>
      </InfoBubble>
    );
  }

}

export default MinimumSpanningTree;