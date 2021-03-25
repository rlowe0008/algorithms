import React from 'react';
import $ from '../../Math';
import AlgorithmImage from './algorithm.png';

class BinarySearchPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Find target $T$ by comparing it to the value in the middle of the array $A_M$ - if <$ math="T<A_M" /> look left, if <$ math="T > A_M" /> look right.</p>
        <ul>
          <li>Set $L=0, R= n-1$</li>
          <li>If <$ math="L>R" />, terminate</li>
          <li>Set <$ math="m=\lfloor \frac{L+R}{2} \rfloor" /></li>
          <li>If <$ math="A_m < T" />: set $L=m+1$, repeat</li>
          <li>If <$ math="A_m > T" />: set $R=m-1$, repeat</li>
          <li>If $A_m=T$, search complete</li>
        </ul>
        <img src={AlgorithmImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default BinarySearchPseudocode;