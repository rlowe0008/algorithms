import React from 'react';
import MasterTheorem from '../Common/MasterTheorem';
import $ from '../../Math';

class ClosestPointsComplexity extends React.Component {

  render() {
    return (
      <div>
        <MasterTheorem />
        <p>The input size halves each time, with 2 recursive calls.</p>
        <h4>Sorting each time</h4>
        <p>Time to recombine is $O(n \log n)$, for a complexity of $T(n)=2T(n/2)+n \log n$. Then Master Theorem does not apply, but we can analyse this recurrence by considering the recursion tree.</p>
        <p>At each stage the input splits by a half, and each node has two children (the branching factor is 2). Now, at the $i$th level of the tree, there are $2^i$ nodes, each with an input size of <$ math="\frac{n}{2^i}" />, for a work done of <$ math="\frac{n}{2^i} \log (\frac{n}{2^i})" /> for each node. This gives a total work done of <$ math="2^i \frac{n}{2^i} \log (\frac{n}{2^i}) = n\log(\frac{n}{2^i})" />, which is $\Theta(n \log n)$. At any level, there is a total complexity of $\Theta(n \log n)$. There are $\log n$ levels, so the overall complexity is $\Theta(n (\log n)^2)$.</p>

        <h4>Linear-time merge</h4>
        <p>There is $\Theta(n)$ work to recombine sub-solutions, giving the recurrence: $$T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) + n$$</p>
        <p>By the Master Theorem this gives a complexity of $O(n \log n)$.</p>
      </div>
    );
  }

}

export default ClosestPointsComplexity;