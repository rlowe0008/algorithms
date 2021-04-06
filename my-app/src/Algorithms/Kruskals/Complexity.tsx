import React from 'react';

class KruskalsComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>Edges are initially sorted by cost, which is an $O(\mid E \mid \log \mid E \mid)$ operation.</p>
        <p>Using the <code>union-find</code> data structure, the <code>find-set</code> and <code>union</code> operations can be implemented in $O(\log \mid E \mid)$ time. We call these operations for all edges, for an overall complexity of $O(\mid E \mid \log \mid E \mid)$. So the overall complexity of the algorithm is $O(\mid E \mid \log \mid E \mid)$.</p>
      </div>
    );
  }

}

export default KruskalsComplexity;