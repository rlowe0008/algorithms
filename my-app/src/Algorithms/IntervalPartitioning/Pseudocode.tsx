import React from 'react';
import AlgorithmImage from './algorithm-explanation.png';

class IntervalPartioningPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ol>
          <li>Sort jobs by start times such that \(s_1 \le s_2 \le ... \le s_n\)</li>
          <li>Set allocated rows \(d = 0\)</li>
          <li>For jobs from \(1\) to \(n\):</li>
          <ol>
            <li>If job \(j\) is compatible with some row, schedule \(j\) in that row \(k\)</li>
            <li>Else, create a new row \(d+1\). Schedule the job in \(d+1\)</li>
          </ol>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="The algorithm" />
      </div>
    );
  }

}

export default IntervalPartioningPseudocode;