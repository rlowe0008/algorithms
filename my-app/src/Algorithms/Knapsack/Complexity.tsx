import React from 'react';

class KnapsackComplexity extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>The algorithm takes $O(1)$ time to calculate each table entry</li>
          <li>There are $\Theta(nW)$ table entries</li>
          <li>After computing optimal values, we trace back through the table to find the solution</li>
        </ul>
        <p>The algorithm runs in $\Theta(nW)$ time and $\Theta(nW)$ space. Note that weights must be integers between $1$ and $W$.</p>
      </div>
    );
  }

}

export default KnapsackComplexity;