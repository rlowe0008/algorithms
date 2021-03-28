import React from 'react';
import InfoBubble from '../Common/InfoBubble';
import BinaryMultiplication from './binary-multiplication.png';
import $ from '../../Math';

class KaratsubaExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Binary addition: optimal approach is a $\Theta(n)$ bitwise add.</p>
        <p>Kolmogorov's conjecture: $\Theta(n^2)$ binary multiplication is optimal.</p>
        <InfoBubble title="Binary multiplication">
          <ol>
            <li>Look at the second number $y$ from right to left</li>
            <li>$y[i] = 1$: write $x$, shifted $i$ places</li>
            <li>$y[i] = 0$: write $0000...$, shifted $i$ places</li>
            <li>Finally, sum all the partial products</li>
          </ol>
          <img src={BinaryMultiplication} className="img-fluid" alt="Binary multiplication example" />
          <p>Complexity: for two $n$-bit numbers, we compute $n$ partial products. We then sum all products, which is a $\Theta(n)$ operation, for a total of $\Theta(n^2)$.</p>
        </InfoBubble>
        <p>Karatsbua: a more optimal algorithm exists.</p>
        <p>Uses: many arithmetic problems have the same bit-complexity as integer multiplication, including:</p>
        <ul>
          <li>Integer squaring</li>
          <li>Integer division and modulus</li>
          <li>Integer square root</li>
        </ul>

        <h4>Algorithm premise</h4>
        <p>Let $x, y$ be two numbers with $n$ bits in the smallest number. Then we can divide $x, y$ into low- and high- order bits ($x=[a][b], y = [c][d]$), splitting them in the middle at $m=\lceil n/2 \rceil$. We can then recursively multiply the four $m$-bit numbers ($e=a \times c, f=b \times d, g=b \times c, h=a \times d$). The final result can then be obtained from these calculations by:
          <$ math="xy=(2^ma+b)(2^mc+d)" large />
          <$ math="=2^{2m}ac+2^m(bc+ad)+bd" large />
          <$ math="=2^{2m}ac+2^m(ac+bd-(a-b)(c-d))+bd" large />
          <$ math="=2^{2m}e+2^m(e+f-g)+f" large />
        </p>
      </div>
    );
  }

}

export default KaratsubaExplanation;