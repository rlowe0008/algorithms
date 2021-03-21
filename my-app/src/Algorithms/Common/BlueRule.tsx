import React from 'react';
import InfoBubble from './InfoBubble';
import $ from '../../Math';

class BlueRule extends React.Component {

  render() {
    return (
      <InfoBubble title="Blue Rule (Fundamental Cutset)">
        <p><b>Fundamental cutset</b>: let $H = (V,T)$ be a spanning tree of $G = (V,E)$</p>
        <p>For any tree edge <$ math="f \in T: (V, T-\{f\})" /> has two connected components. Let $D$ denote the corresponding cutset: the set of edges in one of the connected components with exactly one endpoint in the other connected component.</p>
        <p>We can reconnect the graph by adding back some edge that is in $D$: for any edge <$ math="e \in D : (V, T-\{f\}\cup\{e\})" /> is a spanning tree.</p>
        <p>If <$ math="c_e < c_f" /> then the original tree $(V,T)$ could not have been a <i>minimum</i> spanning tree. Indeed, for any cutset $D$, the lowest-cost edges in this cutset are good candidates for a minimum spanning tree.</p>
        <p>We can use this observation (the lowest-cost edge for some cutset of some graph is a good candidate for the Minimum Spanning Tree of that graph) to derive the "blue rule". Take some connected, undirected, weighted graph $G$, where edges can be given a colour.</p>
        <p><b>🔵 Blue rule</b>: Let $D$ be a cutset with no blue edges. Select an uncoloured edge in $D$ of min cost and colour it blue (since, from the <i>fundamental cutset</i>, the lowest-cost edge in some cutset is a good candidate for an MST).</p>
      </InfoBubble>
    );
  }

}

export default BlueRule;