import React from 'react';
import $ from '../Math';
import FirstExampleImage from './big-o-1.jpeg';
import Diagrams from './big-o-diagrams.png';

class BigO extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{ 'marginTop': '50px' }}>Big-O notation</h1>

        <h3>Big-O</h3>
        <p>Given functions $f(n)$ and $g(n)$, we say that $f(n)$ is $O(g(n))$ if there are positive constants $c$ and $n_0$ such that $f(n) \le cg(n)$ for $n \ge n_0$.</p>
        <p>In other words: $f(n)$  is  $O(g(n))$  if  $f(n)$  is asymptotically  <i>less than or equal to</i>  $g(n)$</p>
        <p><b>Examples</b>:</p>
        <ul>
          <li>$2n + 10$ is $O(n)$</li>
          <li>$n^2$ is not $O(n)$</li>
        </ul>
        <p>Generally speaking we can express $f(n)$ as $O(g(n))$ by:</p>
        <ol>
          <li>If $f(n)$ is a polynomial of degree $d$ then $f(n)$ is $O(n^d)$</li>
          <li>Drop lower-order terms</li>
          <li>Drop constant factors</li>
          <li>Use the lowest possible class of function, e.g. $2n$ is $O(n)$ and $O(n^2)$ but we should say "$2n$ is $O(n)$".</li>
        </ol>
        <p>Algorithms typically have some "dominating cost". <b>Example</b>: an algorithm that requires sorting a list then iterating over it has complexity $n + n \log n$, which is dominated by the cost of sorting, so the algorithm is $O(n \log n)$.</p>

        <p><b>Example</b>: Prove that $n+10$ is dominated by $n^2 \log n$. Then:</p>
        <$ math="n+10 \le c(n^2 \log n)" large />
        <$ math="\iff \frac{n+10}{n^2 \log n} \le c" large />
        <p>The limit as $n \rightarrow \infty$ is $0$. For $n \ge 2$, the function is upper-bounded by (approx) $c = 10$</p>
        <img src={FirstExampleImage} className="img-fluid" alt="Dominating function" />

        <h3>Big-Omega</h3>
        <p>$f(n)$  is  $Ω(g(n))$  if there is a constant  $c \gt 0$  and an integer constant  $n_0 ≥ 1$ such that  $f(n) ≥ c g (n)$  for  $n ≥ n_0$.</p>
        <p>In other words: $f(n)$  is  $Ω(g(n))$  if  $f(n)$  is asymptotically <i>greater than or equal to</i> $g(n)$</p>

        <h3>Big-Theta</h3>
        <p>$f(n)$  is  $ϴ(g(n))$  if there are constants  $c' \gt 0$  and  $c'' \gt 0$  and an integer constant  $n_0 ≥ 1$  such that  $c'g(n) ≤ f(n) ≤ c''g(n)$  for  $n ≥ n0$</p>
        <p>In other words: $f(n)$  is  $ϴ(g(n))$  if  $f(n)$  is asymptotically <i>equal</i> to $g(n)$</p>
        <p>$c'g(n)$ and $c''g(n)$ bound below and above $f(n)$, respectively.</p>

        <img src={Diagrams} className="img-fluid" alt="Big-O, Big-Omega, Big-Theta" />
      </div>
    );
  }

}

export default BigO;