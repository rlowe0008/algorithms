import React from 'react';
import IntervalExampleImage from './interval-example.png';
import $ from '../../Math';

class IntervalSchedulingExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>This algorithm schedules items (typically jobs) with fixed starting and finishing times. Job <$>j</$> starts at <$>s_j</$> and finishes at  <$>f_j</$>. Two jobs are <b>compatible</b> if they do not overlap; one job finishes before the other starts.</p>
        <p>The algorithm finds the maximum subset of mutually compatible jobs (largest subset of jobs that do not overlap).</p>
        <img src={IntervalExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default IntervalSchedulingExplanation;