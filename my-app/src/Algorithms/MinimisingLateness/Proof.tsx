import React from 'react';
import ExchangeProof from '../Common/ExchangeProof';
import $ from '../../Math';

class MinimisingLatenessProof extends React.Component {

  render() {
    return (
      <div>
        <ExchangeProof />
        <p>Firstly, there exists some optimal schedule with no <i>idle time</i> (since reducing idle time schedules tasks earlier, resulting in a lower maximum lateness). Secondly, our algorithm has no idle time.</p>
        <p>Given a schedule S, an inversion is a pair of jobs i and j such that <$ math="d_i < d_j" /> but j is scheduled before i.</p>
        <p>Key observation: our algorithm is the <i>unique</i> idle-free schedule with no inversions (if inversions existed, this would violate the initial sort).</p>
        <p>An idle-free algorithm with an inversion must have an <i>adjacent inversion</i> (two inverted jobs scheduled consecutively): $$[..., j, k, ..., ..., i, ..., ...]$$</p>
        <ul>
          <li>Let \((i,j)\) be the closest inversion such that <$ math="d_i<d_j" /> but j is scheduled before i</li>
          <li>Let k be an element immediately to the right of j</li>
          <li>Case <$ math="d_i > d_k" />: then \( (j,k) \) is an adjacent inversion</li>
          <li>Case <$ math="d_i < d_k" />: then \( (i,k) \) is a closer inversion since <$ math="d_i < d_j < d_k" />.</li>
        </ul>
        <p>Exchanging two adjacent inverted jobs i and j reduces the number of inversions and cannot increase max lateness (since a job with a later due time now finishes earlier).</p>
        <p>Now it must be the case that our algorithm is optimal:</p>
        <ul>
          <li>Optimal schedule S has the fewest inversions, and no idle time</li>
          <li>Case 1: S has no inversions, then it must be optimal.</li>
          <li>Case 2: S has inversions. Then swap two adjacent inversions i and j; the number of inversions is decreased, and the maximum lateness is not increased. This contradicts the "fewest inversions" part of S</li>
        </ul>
        <p>Hence, sorting by earliest deadline minimises the inversions, minimising maximum lateness.</p>
      </div>
    );
  }

}

export default MinimisingLatenessProof;