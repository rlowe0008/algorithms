import React from 'react';
import AlgorithmImage from './algorithm.png';

class KnapsackPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>We include an object if it will increase the maximum value we can store in the knapsack without exceeding $W$.</p>
        <p>Let $OPT(i,w)$ be the optimal value of the knapsack problem with items $1...i$ and weight limit $w$. We can either:</p>
        <ul>
          <li>Include $i$, the new weight limit is $w-w_i$ so $OPT(i,w)=v_i+OPT(i-1, w- w_i)$</li>
          <li>Not include $i$, so $OPT(i,w)=OPT(i-1,w)$</li>
        </ul>
        <p><b>Bellman equation</b>: $OPT(i, w) =$</p>
        <ul>
          <li>$0$, if $i-0$</li>
          <li>$OPT(i-1, w)$, if $w_i \gt w$</li>
          <li>$\max(OPT(i-1, w), v_i + OPT(i-1, w-w_i))$ otherwise</li>
        </ul>
        <p><b>Memoization</b>: Store an $n\times W$ matrix $M$ storing the results of $OPT(i,w)$.</p>

        <ul>
          <li>For $w=0$ to $W$ set $M[0,w]=0$</li>
          <li>For $i=1$ to $n$:
            <ul>
              <li>For $w=0$ to $w$:
                <ul>
                  <li>If $w_i \gt w$ set $M[i,w]=M[i-1, w]$</li>
                  <li>Else set $M[i,w]=\max(M[i-1,w], v_i + M[i-1, w-w_i])$</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Return $M[n,W]$</li>
        </ul>
        <img src={AlgorithmImage} className="img-fluid" alt="Knapsack algorithm" />

        <p>To find the set of items with maximum value, work back from the final entry in $M$:</p>
        <ul>
          <li>Set $w = M[n, W]$</li>
          <li>For $i=n$ to $1$:
            <ul>
              <li>If $M[i, w] \gt M[i - 1, w]$: include $i$, set $w = w - w_i$ to continue adding items with the weight limit when including $i$</li>
              <li>Else, do not include $i$</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

}

export default KnapsackPseudocode;