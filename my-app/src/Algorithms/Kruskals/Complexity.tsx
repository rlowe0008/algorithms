import React from 'react';

class KruskalsComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>Edges are initially sorted by cost, which is an $O(e \log e)$ operation.</p>
        <p>Using the <code>union-find</code> data structure, the <code>find-set</code> and <code>union</code> operations can be implemented in $O(\log e)$ time. We call these operations for all edges, for an overall complexity of $O(e \log e)$. So the overall complexity of the algorithm is $O(e \log e)$.</p>
      </div>
    );
  }

}

export default KruskalsComplexity;