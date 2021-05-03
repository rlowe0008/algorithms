import React from 'react';
import InfoBubble from '../Common/InfoBubble';
import AlgorithmImage from './algorithm.png';

class WISPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Let $p(j)$ denote the largest index $i \lt j$ such that job $i$ is compatible with job $j$</li>
          <li>Let $OPT(j)$ denote the maximum weight of any subset of compatible jobs for the subproblem consisting only of job $1,2,..., j$ - in other words, the solution when only considering jobs up to $j$.</li>
        </ul>
        <p>Our algorithm will find $OPT(n)$, the maximum weight of <i>any</i> subset of mutually compatible jobs (up to $n$).</p>
        <p>In the optimal solution, we include a job if it will increase the maximum-weight subset of mutually-compatible jobs, otherwise we do not include it. For any sub-solution $OPT(j)$, up to some job $j$, either:</p>
        <ul>
          <li>$OPT(j)$ does not select job $j$. Then there must be an optimal solution to the problem consisting of the remaining jobs $1,2,..., j-1$</li>
          <li>$OPT(j)$ selects job $j$. Then $w_j$ is part of the total cost of the set of jobs, and the optimal solution must include the optimal solution to the problem consisting of the remaining compatible jobs $1,2, ..., p(j)$.</li>
        </ul>
        <p>We therefore define $OPT(j)$ recursively by <b>Bellman equation</b>:</p>
        <p>$OPT(j) =$</p>
        <ul>
          <li>$0$, if $j = 0$</li>
          <li>$\max(OPT(j-1), w_j + OPT(p(j)))$, if $j \gt 0$</li>
        </ul>

        <InfoBubble title="Non-dynamic approach">
          <p>Find the weight of the optimal schedule by:</p>
          <ul>
            <li>Sort jobs by finish time</li>
            <li>Compute $p[1], p[2], ..., p[n]$ via binary search</li>
            <li>Compute $OPT(n)$ recursively:
              <ul>
                <li>If $j=0$ return $0$</li>
                <li>Else return $\max(OPT(j-1), w_j + OPT(p[j]))$</li>
              </ul>
            </li>
          </ul>
          <p>⚠️ This algorithm grows in exponential time, since we make recursive calls at each stage of the algorithm. Using dynamic programming, we instead store the results of these sub-problems, reducing the number of recursive calls.</p>
        </InfoBubble>

        <p><b>Memoization</b>: Each job recursively considers predecessors. Work from the first job forwards (sorted by finish time), storing $M[j]=OPT(j)$ for each job $j$.</p>

        <h4>Recursive algorithm</h4>
        <ul>
          <li>Sort jobs by finish time</li>
          <li>Compute $p[1], [2], ..., p[n]$ via binary search</li>
          <li>Assign $M[0]=0$</li>
          <li>Compute $OPT(n)$ recursively:</li>
          <ul>
            <li>If $M[j]$ is uninitialised: $M[j] = \max(OPT(j-1), w_j + OPT(p[j]))$</li>
            <li>Return $M[j]$</li>
          </ul>
        </ul>
        <p>The final value in $M$ is the <b>weight</b> of the optimal schedule.</p>

        <h4>Unwinding recursion</h4>
        <ul>
          <li>Sort jobs by finish time</li>
          <li>Compute $p[1], p[2], ..., p[n]$</li>
          <li>Assign $M[0] = 0$</li>
          <li>For $j=1$ to $n$:
            <ul>
              <li>$M[j] = \max(M[j-1], w_j + M[p[j]])$</li>
            </ul>
          </li>
        </ul>
        <p>To find the optimal schedule for which $M$ is maximised: in each iteration:</p>
        <ul>
          <li>If $w_j + M[p[j]] \gt M[j-1]$: Use $j$ and $p[j]$ for the solution $\rightarrow$ <code>solution[j] = solution[p[j]] ∪ j</code></li>
          <li>Else: Do not use $j$; use the previous solution $\rightarrow$ <code>solution[j] = solution[j-1]</code></li>
        </ul>

        <img src={AlgorithmImage} className="img-fluid" alt="Weighted interval scheduling" />
      </div>
    );
  }

}

export default WISPseudocode;