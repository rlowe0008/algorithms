import React from 'react';
import $ from '../../Math';

class KaratsubaPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Define <code>karatsuba-multiply(x, y, n)</code>:</p>
        <ol>
          <li>If $n=1$ return $x \times y$</li>
          <li>$m = \lceil n/2 \rceil$</li>
          <li>$a = \lfloor x/2^m \rfloor$</li>
          <li>$b = x \mod 2^m$</li>
          <li>$c = \lfloor y / 2^m \rfloor$</li>
          <li>$d = y \mod 2^m$</li>
          <li>$e = $ <code>karatsuba-multiply(a, c, m)</code></li>
          <li>$f = $ <code>karatsuba-multiply(b, d, m)</code></li>
          <li>$g = $ <code>karatsuba-multiply(|a-b|, |c-d|, m)</code></li>
          <li>Flip sign of $g$ if needed</li>
          <li>Return <$ math="2^{2m}e+2^m(e+f-g)+f" /></li>
        </ol>
      </div>
    );
  }

}

export default KaratsubaPseudocode;