import React from 'react';
import InfoBubble from './InfoBubble';
import $ from '../../Math';

class RedRule extends React.Component {

  render() {
    return (
      <InfoBubble title="Red Rule (Fundamental Cycle)">
        <p><b>Fundamental cycle</b>: let $H=(V,T)$ be a spanning tree of $G=(V,E)$.</p>
        <p>For any edge <$ math="e \in E, e \not\in T : T \cup \{e\}" /> contains a unique cycle $C$ (if we add some non-tree edge $e$ to our spanning tree then our spanning tree will no longer be maximally acyclic, and will contain a cycle).</p>
        <p>For any edge <$ math="f \in C : (V, T \cup \{e\}-\{f\})" /> is a spanning tree (if we add some non-tree edge $e$ to our spanning tree then we get a new cycle $C$. If we then remove some edge $f$ in cycle $C$ then we will again obtain a spanning tree, since we keep the graph connected but the number of edges still equals $\mid V \mid - 1$).</p>
        <p>If <$ math="c_e < c_f" /> then the original tree $(V,T)$ could not have been a <i>minimum</i> spanning tree. Indeed, for any cycle $C$, the heaviest edge should not be considered for a minimum spanning tree since a difference, lower-cost edge could always be selected.</p>
        <p>We can use this observation (the heaviest edge in a cycle of some graph will not be in the Minimum Spanning Tree of that graph) to derive the "red rule". Take some connected, undirected, weighted graph $G$, where edges can be given a colour.</p>
        <p><b>🔴 Red rule</b>: Let $C$ be a cycle with no red edges. Select an uncoloured edge of $C$ with max cost and colour it red (since, from the <i>fundamental cycle</i>, the heaviest edge in a cycle will not form an MST).</p>
      </InfoBubble>
    );
  }

}

export default RedRule;