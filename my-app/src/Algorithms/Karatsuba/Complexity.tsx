import React from 'react';
import MasterTheorem from '../Common/MasterTheorem';
import $ from '../../Math';

class KaratsubaComplexity extends React.Component {

  render() {
    return (
      <div>
        <MasterTheorem />
        <p>There are three recursive calls ($a = 3$), each of which use half the input size ($b=2$).</p>
        <p>When recombining, we need to calculate $z \times 2^n$ and $z \div 2^n$ for some $z$ multiple times (calculating $a, b, c, d$ as well as the final calculation). These are both $\Theta(n)$ operations:</p>
        <ul>
          <li>$z \times 2^n$ in $n$ operations with $n$ left shifts</li>
          <li>$z \div 2^n$ in $n$ operations with $n$ right shifts</li>
        </ul>
        <p>Hence the work to recombine is $\Theta(n)$. Then the overall complexity of the algorithm is given by the recurrence: $$T(n) = 3T(\lceil n/2 \rceil) + \Theta(n)$$</p>
        <p>By the Master Theorem: $c=1$, $\log_b a = \log_2 3$. $c \lt \log_b a$, so <$ math="T(n) = \Theta(n^{\log_b a}) = O(n^{1.585})" />.</p>
      </div>
    );
  }

}

export default KaratsubaComplexity;