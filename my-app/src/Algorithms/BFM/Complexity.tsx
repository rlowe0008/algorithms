import React from 'react';

class BFMComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>Lemma: After pass $i$, $d[v] \le$ length of a shortest $v \rightarrow t$ path using $\le i$ edges. Proven below.</p>
        <p>Assuming no negative cycles, the Bellman-Ford-Moore algorithm <i>computes the lengths</i> of the shortest $v \rightarrow t$ paths in $O(\mid E \mid \mid V \mid)$ time and $\Theta(\mid V \mid)$ extra space, since by the previous lemma, after $i$ passes, $d[v] \le$ length of shortest path that uses $\le i$ edges, and the shortest path must exist with at most $\mid E \mid-1$ edges.</p>
      </div>
    );
  }

}

export default BFMComplexity;