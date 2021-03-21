import React from 'react';
import InfoBubble from './InfoBubble';
import CutImage from './cuts.png';
import CycleCutImage from './cutsets-cycles.png';

class CyclesCutsets extends React.Component {

  render() {
    return (
      <InfoBubble title="Cycles and Cutsets">
        <p><b>Path</b>:  a sequence of edges which connects a sequence of nodes.</p>
        <p><b>Cycle</b>: a path with no repeated edges or nodes other than the starting and ending nodes.</p>
        <p><b>Cut</b>: a partition of the set of nodes $V$ into two non-empty subsets $S$ and $V-S$.</p>
        <p><b>Cutset</b>: for some cut $S$, the cutset of $S$ is the set of edges with exactly one endpoint in $S$.</p>
        <img src={CutImage} className="img-fluid" alt="Cuts and cutsets" />
        <p><i>Proposition</i>: A cycle and cutset intersect in an even number of edges. <i>Proof:</i> Consider some cycle $C$ and cut $S$ with cutset $D$. If $C$ is entirely within or entirely outside of some cut $S$, then $C \cap D = \emptyset$. Otherwise, if there is some edge $e$ in cycle $C$ that goes from some vertex within the cut to some vertex outside of the cut, then there must be some edge $e'$ in $C$ that returns to the cut, since $C$ is a cycle. Hence edges in the cycle and cutset must come in pairs $(e, e')$.</p>
        <img src={CycleCutImage} className="img-fluid" alt="Cycles and cutsets" />
      </InfoBubble>
    );
  }

}

export default CyclesCutsets;