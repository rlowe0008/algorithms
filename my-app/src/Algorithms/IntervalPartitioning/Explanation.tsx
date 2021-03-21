import React from 'react';
import IntervalExampleImage from './interval-example.png';

class IntervalPartitioningExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>This algorithm aims to partition jobs into the smallest number of rows such that they do not overlap.</p>
        <p><b>Example</b>: find minimum number of classrooms to schedule all lectures so that no two lectures occur at the same time in the same room.</p>
        <ul>
          <li>Input: a collection of jobs with starting and finishing times (pairs of numbers \([s_j, f_j]\))</li>
          <li>Output: find the smallest number of rows such that each job can be ran without overlaps</li>
        </ul>
        <img src={IntervalExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default IntervalPartitioningExplanation;