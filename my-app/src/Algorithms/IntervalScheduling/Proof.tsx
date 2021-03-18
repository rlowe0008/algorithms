import React from 'react';
import $ from '../../Math';

class IntervalSchedulingProof extends React.Component {

  render() {
    return (
      <div>
        <p><b>Theorem</b>: the earliest-finish-time-first algorithm is optimal.</p>
        <p><b>Proof</b>: by contradiction. Assume the algorithm is not optimal. Let <$ math={String.raw`I =\{i_1, i_2, ..., i_k \}`}/> be the set of jobs selected by the algorithm, and <$ math={String.raw`J=\{j_1, j_2, ..., j_m\}`}/> be the set of jobs in the optimal solution, with <$ math={String.raw`k < m`}/> (since our solution <$>I</$> is not optimal but <$>J</$> is). For simplicity, we say that jobs are "equal" if they have the same finish time.</p>
        <p>Assume that at some point our solutions are equal <i>up to a point</i> <$>r</$>, in other words: <$>i_1 = j_1, i_2 = j_2, ..., i_r = j_r</$> for some <$ math="r < k" /> (but any subsequent jobs are <i>not equal</i>). Then:</p>
        <ul>
          <li>Jobs <$ math="i_{r+1}" /> and <$ math="j_{r+1}" /> exist, since <$ math="r < k < m" /></li>
          <li><$ math="i_{r+1}" /> finishes no later than <$ math="j_{r+1}" />, since we initially sorted by finish time. Our algorithm must have selected the job with the earliest finish time, compatible with <$ math="j_r" /> and finishing after <$ math="j_r" />.</li>
        </ul>
        <p>If <$ math="i_{r+1}" /> finishes no later than <$ math="j_{r+1}" />, then either:</p>
        <ul>
          <li><$ math="i_{r+1}" /> finishes <i>before</i> <$ math="j_{r+1}" />, and the optimal set is not optimal. Contradiction.</li>
          <li><$ math="i_{r+1}" /> finishes at the <i>same time</i> as <$ math="j_{r+1}" />. Then <$ math="i_{r+1} = j_{r+1}" />, so <$>r</$> is not the maximum value for which jobs are equal. Contradiction.</li>
        </ul>
      </div>
    );
  }

}

export default IntervalSchedulingProof;