import React from 'react';
import OptimalSubstructProof from '../Common/OptimalSubstructure';

class WISProof extends React.Component {

  render() {
    return (
      <div>
        <OptimalSubstructProof />
        <p>Consider the optimal solution $OPT(i)$. Either job $i$ is used or it is not:</p>
        <ul>
          <li>Job $i$ is not used: The optimal solution is the optimal solution from the remaining jobs, $OPT(i-1)$</li>
          <li>Job $i$ is used. $p[i]$ is the latest job that does not conflict with $i.
            <ul>
              <li>Removing $i$ from the optimal solution $OPT(i)$ gives us an optimal, compatible solution $OPT(p[i])$, so: $OPT(i)-w_i\le OPT(p[i])$</li>
              <li>Hence $OPT(i) = w_i + OPT(p(i))$</li>
            </ul>
          </li>
          <li>$OPT(i)$ is the greater of these two terms, and so must be the optimal solution to the sub-problem up to $i$.</li>
        </ul>
      </div>
    );
  }

}

export default WISProof;