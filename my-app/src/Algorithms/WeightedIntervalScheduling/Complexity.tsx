import React from 'react';

class WISComplexity extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Sort by finish time: $O(n \log n)$, e.g. by mergesort</li>
          <li>Compute $p[j]$ for each job $j$: $O(n \log n)$ by binary search; $O(\log n)$ per job</li>
          <li>Calculate $M[j]$ for each job: $O(n)$, we only calculate $M[j]$ once for each job (see the non-recursive solution)</li>
        </ul>
        <p>Overall complexity: $O(n \log n)$.</p>
      </div>
    );
  }

}

export default WISComplexity;