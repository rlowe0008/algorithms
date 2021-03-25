import React from 'react';
import MasterTheorem from '../Common/MasterTheorem';

class BinarySearchComplexity extends React.Component {

  render() {
    return (
      <div>
        <MasterTheorem />
        <p>At each step, there is a single sub-problem branch ($a=1$), and the input size halves ($b=2$). There is constant work needed to recombine sub-problems ($f(n) = \Theta(n^0)$). Hence the complexity of Binary Search is given by the recurrence: $$T(n)=T(n/2)+\Theta(n^0)$$</p>
        <p>By the Master Theorem: $c=0=\log_2(1)$ so overall complexity is $O(n^0 \log n) = O(\log n)$.</p>
      </div>
    );
  }

}

export default BinarySearchComplexity;