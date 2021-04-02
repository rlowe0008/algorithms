import React from 'react';
import OptimalSubstructProof from '../Common/OptimalSubstructure';

class KnapsackProof extends React.Component {

  render() {
    return (
      <div>
        <OptimalSubstructProof />
        <p>Consider the solution $OPT(i, w)$, then either:</p>
        <ul>
          <li>$i$ is not included: solution must be selected from all remaining items: $OPT(i-1, w)$</li>
          <li>$i$ is included: there is a remaining weight limit of $w-w_i$, and remaining items $i-1$.
            <ul>
              <li>Take $OPT(i,w)$ but remove item $i$ and reduce the capacity to $w-w_i$. By the optimality of $OPT(i-1, w - w_i)$: $OPT(i,w)-v_i\le OPT(i-1, w-w_i)$.
                <ul>
                  <li>In other words: removing $i$ gives us a solution <i>at best</i> $OPT(i-1, w-w_i)$</li>
                </ul>
              </li>
              <li>Take $OPT(i-1, w-w_i)$ and include item $i$ by increasing the weight limit. Then $OPT(i,w) \ge v_i + OPT(i-1, w-w_i)$
                <ul>
                  <li>In other words: including $i$ must give us a solution better than $OPT(i-1, w-w_i)$</li>
                </ul>
              </li>
              <li>So $OPT(i,w) = v_i + OPT(i-1, w-w_i)$</li>
            </ul>
          </li>
          <li>$OPT(i,w)$ is the greatest of these two options and so must be the optimal solution to the sub-problem with items up to $i$ and weight limit $w$.</li>
        </ul>
      </div>
    );
  }

}

export default KnapsackProof;