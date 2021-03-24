import React from 'react';
import BlueRule from '../Common/BlueRule';
import CyclesCutsets from '../Common/CyclesCutsets';
import MinimumSpanningTree from '../Common/MinimumSpanningTree';

class PrimsExplanation extends React.Component {

  render() {
    return (
      <div>
        <MinimumSpanningTree />
        <CyclesCutsets />
        <BlueRule />
        <p>Prim's algorithm is a specific case of the "blue rule" from the general MST algorithm: the lowest-cost edge of some cutset is a good candidate for the Minimum Spanning Tree of a graph. The algorithm starts with a single node and finds the minimum cost of exploring all neighbours, called the "attachment cost" (cost to attach the neighbour to the set of explored nodes). The set of explored nodes is the cutset, and the algorithm loops until all nodes have been "attached" to the cutset, each time selecting the lowest-cost attachment edge. The resulting set of attachment edges is a Minimum Spanning Tree of the original graph.</p>
      </div>
    );
  }

}

export default PrimsExplanation;