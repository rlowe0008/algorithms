import React from 'react';
import MasterTheorem from '../Common/MasterTheorem';
import $ from '../../Math';
import ComplexityImage from './complexity.png';

class MergesortComplexity extends React.Component {

  render() {
    return (
      <div>
        <MasterTheorem />
        <p>
          The input size halves each time, and there are 2 recursive calls at each point. There is $\Theta(n)$ work to recombine the two list halves. So the overall complexity is given by the recurrence:
          <$ math="T(n) = T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) + n" large />
          <$ math="= 2T(n/2) + n" large />
        </p>
        <p>By the Master Theorem, $c=1$, $\log_2(2) = 1$, then $c= \log_b a$ so $T(n) = \Theta(n^1 \log n)= O(n \log n)$.</p>
        <img src={ComplexityImage} className="img-fluid" alt="Mergesort complexity" />
      </div>
    );
  }

}

export default MergesortComplexity;