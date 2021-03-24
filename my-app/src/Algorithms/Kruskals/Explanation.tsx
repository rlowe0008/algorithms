import React from 'react';
import CyclesCutsets from '../Common/CyclesCutsets';
import MinimumSpanningTree from '../Common/MinimumSpanningTree';
import RedRule from '../Common/RedRule';

class KruskalsExplanation extends React.Component {

  render() {
    return (
      <div>
        <MinimumSpanningTree />
        <CyclesCutsets />
        <RedRule />
        <p>Kruskal's algorithm is a specific case of the "red rule" from the general MST algorithm: the highest-cost edge of a cycle will not be in the Minimum Spanning Tree of the graph. Each vertex in the graph is stored within its own set, with each set representing connected components of the graph. Edges are sorted by cost, and the lowest-cost edge is repeatedly extracted. If the edge connects two vertices in two different sets (i.e. two disconnected graph components) then the edge is stored in the MST and the two sets of vertices are merged; if the vertices are in the same set then the algorithm will not include the edge, since including the edge will create a cycle. Once all components are connected the algorithm terminates; the lowest-cost edges that will not create a cycle have been selected for the Minimum Spanning Tree.</p>
      </div>
    );
  }

}

export default KruskalsExplanation;