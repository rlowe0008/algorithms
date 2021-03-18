import React from 'react';
import AlgorithmImage from './algorithm-explanation.png';
import $ from '../../Math';

class IntervalSchedulingPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ol>
          <li>Sort jobs by finish times such that <$>f_1 \le f_2 \le ... \le f_n</$></li>
          <li>Create a set of jobs <$>S = \emptyset</$></li>
          <li>For jobs from 1 to n: if job is compatible with jobs in S, add job to S</li>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="The algorithm" />
      </div>
    );
  }

}

export default IntervalSchedulingPseudocode;