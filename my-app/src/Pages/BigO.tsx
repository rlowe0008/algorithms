import React from 'react';
import InfoBubble from '../Algorithms/Common/InfoBubble';
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

        <h4>Rules</h4>
        <ul>
          <li>If $f$ is $O(g)$ and $c \gt 0$ then $cf$ is $O(g)$.</li>
          <li>If $f_1$ is $O(g_1)$ and $f_2$ is $O(g_2)$ then $f_1 f_2$ is $O(g_1 g_2).$</li>
          <li>If $f_1$ is $O(g_1)$ and $f_2$ is $O(g_2)$ then $f_1 + f_2$ is $O(max(g_1, g_2))$.</li>
          <li>If $f$ is $O(g)$ and $g$ is $O(h)$ then $f$ is $O(h)$.</li>
        </ul>

        <h3>Big-Omega</h3>
        <p>$f(n)$  is  $Ω(g(n))$  if there is a constant  $c \gt 0$  and an integer constant  $n_0 ≥ 1$ such that  $f(n) ≥ c g (n)$  for  $n ≥ n_0$.</p>
        <p>In other words: $f(n)$  is  $Ω(g(n))$  if  $f(n)$  is asymptotically <i>greater than or equal to</i> $g(n)$</p>

        <h3>Big-Theta</h3>
        <p>$f(n)$  is  $ϴ(g(n))$  if there are constants  $c' \gt 0$  and  $c'' \gt 0$  and an integer constant  $n_0 ≥ 1$  such that  $c'g(n) ≤ f(n) ≤ c''g(n)$  for  $n ≥ n0$</p>
        <p>In other words: $f(n)$  is  $ϴ(g(n))$  if  $f(n)$  is asymptotically <i>equal</i> to $g(n)$</p>
        <p>$c'g(n)$ and $c''g(n)$ bound below and above $f(n)$, respectively.</p>

        <img src={Diagrams} className="img-fluid" alt="Big-O, Big-Omega, Big-Theta" />

        <h3>Limits</h3>

        <p>If <$ math="\lim_{n \rightarrow \infty} \frac{f(n)}{g(n)} = c" /> for some constant $0 \lt c \lt \infty$ then $f(n)$ is $\Theta(g(n))$.</p>

        <p>If <$ math="\lim_{n \rightarrow \infty} \frac{f(n)}{g(n)} = 0" /> then $f(n)$ is $O(g(n))$.</p>

        <p>If <$ math="\lim_{n \rightarrow \infty} \frac{f(n)}{g(n)} = \infty" /> then $f(n)$ is $\Omega(g(n))$.</p>

        <p><b>Example</b>: Prove that $n^2 \log n$ is $O(n+10)$:</p>
        <$ math="\lim_{n \rightarrow \infty}\frac{n+10}{n^2 \log n} = 0" large />
        <img src={FirstExampleImage} className="img-fluid" alt="Dominating function" />
        
        <h4>Bounds for common functions</h4>
        <p><b>Polynomials</b>: Let $f(n) = a_0 + a_1 n + ... + a_d n^d$ with $a_d \gt 0$. Then $f(n)$ is $\Theta(n^d)$.</p>

        <InfoBubble title="Proof">
          <$ math="\lim_{n \rightarrow \infty} \frac{a_0 + a_1n + ... + a_d n^d}{n^d} = a_d" />
        </InfoBubble>

        <p><b>Logarithms</b>: $\log_a n$ is $\Theta(\log_b n)$ for every $a \gt 1, b \gt 1$.</p>

        <InfoBubble title="Proof">
          <p>By the rules of logarithms, <$ math="\log_ab = \frac{\log_cb}{\log_ca}" />. Then:</p><$ math="\frac{\log_an}{\log_b n} = \frac{1}{\log_ba}" large />
          <p>Then:</p><$ math="\lim_{n \rightarrow \infty} \frac{1}{\log_ba} = \frac{1}{\log_ba}" large />
          <p>Since <$ math="\lim_{n \rightarrow \infty} \frac{f(n)}{g(n)} = c" /> for some constant $0 \lt c \le \infty$, $f(n)$ is $\Theta(g(n))$.</p>
        </InfoBubble>

        <p><b>Logarithms and polynomials</b>: $\log_an$ is $O(n^d)$ for every $a \gt 1$ and every $d \gt 0$.</p>

        <InfoBubble title="Proof">
          <$ math="\lim_{n \rightarrow \infty} \frac{\log_a n}{n^d} = 0" large />
        </InfoBubble>

        <p><b>Exponentials and polynomials</b>: $n^d$ is $O(r^n)$ for every $r \gt 1$ and every $d \gt 0$.</p>

        <InfoBubble title="Proof">
          <$ math="\lim_{n \rightarrow \infty} \frac{n^d}{r^n} = 0" large />
        </InfoBubble>

        <p><b>Factorials</b>: <$ math="n!$ is $2^{\Theta(n \log n)}" /> - See Stirling's approximation.</p>

      </div>
    );
  }

}

export default BigO;