import React from 'react';
import RecursiveInvariantProof from '../Common/RecursiveInvariant';
import $ from '../../Math';

class KaratsubaProof extends React.Component {

  render() {
    return (
      <div>
        <RecursiveInvariantProof />
        <p>Define the recursive invariant: <code>karatsuba-multiply(x, y, n)</code> returns $x \times y$.</p>
        <p>Initialisation: <code>karatsuba-multiply(x, y, 1)</code> returns $x \times y$ by the algorithm.</p>
        <p>Maintenance. Let:</p>
        <ul>
          <li>$m = \lceil n/2 \rceil$</li>
          <li>$a = \lfloor x/2^m \rfloor$</li>
          <li>$b = x \mod 2^m$</li>
          <li>$c = \lfloor y / 2^m \rfloor$</li>
          <li>$d = y \mod 2^m$</li>
          <li>$e = $ <code>karatsuba-multiply(a, c, m)</code> $= a \times c$</li>
          <li>$f = $ <code>karatsuba-multiply(b, d, m)</code> $= b \times d$</li>
          <li>$g = $ <code>karatsuba-multiply(|a-b|, |c-d|, m)</code> $= (a-b)(c-d)$</li>
        </ul>
        <p>Then we return:</p>
        <$ math="2^{2m}e+2^m(e+f-g)+f" large/>
        <$ math="= 2^{2m}ac + 2^m(ac+bd-[(a-b)(c-d)])+bd" large/>
        <$ math="=2^{2m}ac+2^m(bc+ad)+bd" large/>
        <$ math="= (2^ma+b)(2^mc+d)" large/>
        <p>Now since $a$ is the quotient of $x/2^m$ and $b$ is the remainder, then $2^ma + b = x$. The same applies for $2^mc +d = y$. Hence $(2^ma+b)(2^mc+d) = xy$, which we return.</p>
        <p>Termination: run <code>karatsuba-multiply(x, y, n)</code> at the top-level which returns $x \times y$.</p>
      </div>
    );
  }

}

export default KaratsubaProof;