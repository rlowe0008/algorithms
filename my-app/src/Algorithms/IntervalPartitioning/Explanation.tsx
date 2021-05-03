import React from 'react';
import IntervalExampleImage from './interval-example.png';

class IntervalPartitioningExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>This algorithm aims to partition jobs into the smallest number of rows such that they do not overlap.</p>
        <p><b>Example</b>: find minimum number of classrooms to schedule all lectures so that no two lectures occur at the same time in the same room.</p>
        <img src={IntervalExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default IntervalPartitioningExplanation;