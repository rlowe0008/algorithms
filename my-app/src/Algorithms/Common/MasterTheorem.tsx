import React from 'react';
import InfoBubble from './InfoBubble';
import $ from '../../Math';
import MasterTheoremTreeImage from './master-theorem-tree.png';

class MasterTheorem extends React.Component {

  render() {
    return (
      <InfoBubble title="Master Theorem">
        <p>Consider some divide-and-conquer algorithm:</p>
        <ul>
          <li>$a \ge 1$ is the number of sub-problems at each stage</li>
          <li>$b \ge 2$ is the factor by which the subproblem size decreases</li>
          <li>$f(n) \ge 0$ is the work to divide and combine subproblems</li>
        </ul>
        <p>Then it has a complexity of: <$ math="T(n) = a T\left(\frac{n}{b}\right) + f(n)" large /> with $T(0) = 0, T(1) = \Theta(1)$.</p>
        <p>When $f(n) = \Theta(n^c)$, then:</p>
        <ul>
          <li>If <$ math="c >\log_b a" /> then $T(n) = \Theta(n^c)$</li>
          <li>If $c = \log_b a$ then $T(n) = \Theta(n^c \log n)$</li>
          <li>If <$ math="c < \log_b a" /> then <$ math="T(n) = \Theta(n^{\log_b a})" /></li>
        </ul>
        <InfoBubble title="Deriving the Master Theorem">
          <p>Consider the equation <$ math="T(n) = a T\left(\frac{n}{b}\right) + f(n)" />, where $f(n)$ denotes the time needed to do the division and combination of the subproblems.</p>
          <p>Assume $n$ is a power of $b$. Then when running a recursive algorithm, we will form a recursion tree:</p>
          <ul>
            <li>$a$, the number of <i>sub-problems</i>, is the <b>branching factor</b>: every non-leaf will have exactly $a$ children</li>
            <li>There are $a^i$ subproblems at level $i$</li>
            <li>There are $1 + \log_b n$ levels, since we need to divide the original problem $T(n)$ exactly $b$ times until we reach a constant size</li>
            <li>At level $i$, the subproblem will have size $n/b^i$</li>
          </ul>
          <img src={MasterTheoremTreeImage} className="img-fluid" alt="Recursion tree" />
          <p>Let $f(n) = n^c$ for some arbitrary real constant $c$. Then suppose $T(n)$ satisfies <$ math="T(n) = a T\left(\frac{n}{b}\right) + n^c" />. How much work do we perform at each stage of the tree?</p>
          <p>At the first level the input size is $n/b$. The work to divide and recombine solutions is $(n/b)^c$. Exactly $a$ calls are made at this level. So the total work done by all calls in the first level of the recursion tree is $a(n/b)^c$.</p>
          <p>Applying the same logic to the second level, the total work done by all calls in the second level of the recursion tree is $a^2(n/b^2)^c$.</p>
          <p>Let $r = a/b^c$. At the $i$th level, $a^i(n/b^i)^c = n^cr^i$ operations are performed.</p>
          <p>At the bottom level of the tree there is depth $1 + \log_b n$. Each operation is $T(1)$, so there is a total of <$ math="a^{\log_b n} = n^{\log_b(a)}" /> operations at this level.</p>

          <InfoBubble title="$a^{\log_b(n)} = n^{\log_b(a)}$">
            <$ math="a^{\log_b(n)} = (b^{\log_b(a)})^{\log_b(n)}" large /> <$ math="= b^{\log_b(a) \times \log_b(n)}" large /> <$ math="=(b^{\log_b(n)})^{\log_b(a)}" large /> <$ math="= n^{\log_b(a)}" large />
            <p>Alternatively, take the change of base rule for logarithms: <$ math="\log_b(a) = \frac{\log_x(a)}{\log_x(b)}" />. Then: <$ math="\log_a(n)=\frac{\log_b(n)}{\log_b(a)}" large /> <$ math="\iff \log_a(n)\log_b(a)=\log_b(n)" large /> <$ math="\iff \log_a(n^{\log_b(a)}) = \log_a(a^{\log_b(n)})" large /> <$ math="\iff n^{\log_b(a)} = a^{\log_b(n)}" large /></p>
          </InfoBubble>

          <p>Recall that, with $r = a/b^c$, then at the $i$th level, the work done is $a^i(n/b^i)^c = n^c r^i$. Also, there are $1+\log_b n$ levels for the whole tree. Then the total amount of work done across every level of the tree is: <$ math="T(n) = n^c \sum^{\log_b n}_{i=0} r^i" large /></p>
          <p>Now, the result of this varies depending on the value of $r = a/b^c$:</p>
          <p><$ math="T(n) = n^c \sum^{\log_b n}_{i=0} r^i=" />...</p>
          <ul>
            <li><$ math="\Theta(n^c)$, if $r < 1 \iff c > \log_ba" />: Cost is dominated by the work done at the root</li>
            <li><$ math="\Theta(n^c \log n)$, if $r = 1 \iff c = \log_ba" />: Cost is evenly distributed throughout the tree</li>
            <li><$ math="\Theta(n^{\log_ba})$, if $r > 1 \iff c < \log_ba" />: Cost is dominated by the work done at the leaves, since the total cost at the bottom level of the tree is <$ math="n^{\log_ba}" /></li>
          </ul>

          <InfoBubble title="Proof">
            <p>We can prove these by first considering the geometric series:</p>
            <ul>
              <li>If <$ math="0 < r < 1" /> then $1 +r + r^2 + ... + r^k \le 1/(1-r)$</li>
              <li>If $r=1$ then $1 +r + r^2 + ... + r^k = k +1$</li>
              <li>If <$ math="r>1" /> then <$ math="1 +r + r^2 + ... + r^k =(r^{k+1}-1)/(r-1)" /></li>
            </ul>
            <p>Consider this final case, where <$ math="r>1" />. Now $r$ is constant, so $r$ is $O(1)$. Then <$ math="\frac{r^{k+1}-1}{r-1} = O(r^k)" />. Also, note that $k=\log_bn$, since we are summing to the depth of the tree, which has $\log_bn$ levels. Also recall that $r=a/b^c$.</p>
            <p>Now:</p>
            <$ math="T(n) = n^c \sum^{\log_b n}_{i=0} r^i" large />
            <$ math="= n^c \times O(r^k)" large />
            <$ math="=n^c \times O\left(\left(\frac{a}{b^c}\right)^{\log_bn}\right)" large />
            <$ math="=n^c \times O\left(\frac{n^{\log_ba}}{n^c}\right)" large />
            <$ math="=O(n^{\log_ba})" large />
            <p>The other cases can be proven in a similar manner.</p>
          </InfoBubble>

          <p>The Master Theorem is slightly relaxed from this proof:</p>
          <ol>
            <li>In $T(n)$, $f(n)$ need not equal $n^c$, but instead be any function that is $\Theta(n^c)$.</li>
            <li>$n$ need not be a power of $b$, we simply use either <code>floor(n/b)</code> or <code>ceil(n/b)</code> to ensure that $n$ is always an integer.</li>
          </ol>
        </InfoBubble>

        <p>Extensions:</p>
        <ul>
          <li>We can replace $\Theta$ with $O$ everywhere</li>
          <li>We can replace $\Theta$ with $\Omega$ everywhere</li>
          <li>We can replace the initial conditions with $T(n) = \Theta(1)$ for all $n \le n_0$ and require the recurrence to hold only for all <$ math="n > n_0" />. $T(n)$ is a constant for all sufficiently small $n$, and the recurrence need only hold for sufficiently large $n$.</li>
        </ul>

        <InfoBubble title="Example">
          <p><b>Example 1</b></p>
          <p>Consider a divide-and-conquer algorithm that makes $3$ recursive calls at each level. At each recursive call, input size is halved. The complexity of splitting and recombining inputs is $5n$. Then its complexity satisfies the recurrence: <$ math="T(n)=3T(\lfloor n/2 \rfloor) + 5n" large /> </p>
          <ul>
            <li>There are 3 recursive calls so $a=3$</li>
            <li>We divide the input size by 2 so $b=2$</li>
            <li>$c=1$ since $5n$ is $\Theta(5n)$</li>
            <li><$ math="\log_ba > 1" /> so <$ math="T(n) = \Theta(n^{\log_23})=O(n^{1.58})" /></li>
          </ul>
          <p><b>Example 2</b></p>
          <p><$ math="T(n)=T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) + 17n" large /></p>
          <ul>
            <li>$a=2, b=2, c=1, \log_ba=1$</li>
            <li>$T(n)=\Theta(n \log n)$</li>
            <li>It is ok to mix floor and ceiling</li>
          </ul>
          <p><b>Example 3</b></p>
          <p>$$T(n)=48T(\lfloor n/4 \rfloor) + n^3 = \Theta(n^3)$$</p>
        </InfoBubble>

        <InfoBubble title="Master Theorem may not apply" >
          <p>There are 3 conditions for which the master theorem is not applicable:</p>
          <ul>
            <li>Number of sub-problems is not constant, e.g. $T(n)=nT(n/2) + n^2$</li>
            <li>Number of sub-problems is less than $1$, e.g. <$ math="T(n)=\frac{1}{2}T(n/2) + n^2" /></li>
            <li>Work to divide and combine sub-problems is not $\Theta(n^c)$, e.g. $T(n)=2T(n/2) + n \log n$</li>
          </ul>
          <p><b>Example</b>: Consider the divide-and-conquer algorithm with the recurrence $T(n)=2T(n/2) + n \log n$. Then master theorem does not apply, but we can still analyse the complexity of the algorithm. We form a tree, where at each stage the input splits by a half, and each node has two children (the branching factor is 2). Now, at the $i$th level of the tree, there are $2^i$ nodes, each with an input size of <$ math="\frac{n}{2^i}" />, for a work done of <$ math="\frac{n}{2^i} \log (\frac{n}{2^i})" /> for each node. This gives a total work done of <$ math="2^i \frac{n}{2^i} \log (\frac{n}{2^i}) = n\log(\frac{n}{2^i})" />, which is $\Theta(n \log n)$. At any level, there is a total complexity of $\Theta(n \log n)$. There are $\log n$ levels, so the overall complexity is $\Theta(n (\log n)^2)$.</p>
        </InfoBubble>

      </InfoBubble>
    );
  }

}

export default MasterTheorem;