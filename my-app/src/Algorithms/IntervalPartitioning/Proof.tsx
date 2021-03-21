import React from 'react';
import IntervalExampleImage from './interval-example.png';
import $ from '../../Math';
import StructuralBoundProof from '../Common/StructuralBoundProof';

class IntervalPartitioningProof extends React.Component {

  render() {
    return (
      <div>
        <StructuralBoundProof />
        <p>Structural bound: The <b>depth</b> of a set of open intervals is the maximum number of intervals open at the same time.</p>
        <p><i>Example</i>: In the example below we have a set of lessons occupying some interval. There are only ever three lessons running at the same time, so we only ever need three classrooms open at the same time. The maximum number of intervals open at the same time is three, so the depth is 3.</p>
        <img src={IntervalExampleImage} className="img-fluid" alt="An example input and output" />
        <p>When scheduling a set of open intervals, we will always need <i>at least</i> as many rows as the depth of the set of open intervals (lower bound): <$ math="\text{rows needed} \ge \text{depth}, d" /></p>
        <p>Depth is also an <i>upper bound</i> on the number of rows needed, since at any time there can only be at most \(d\) concurrent jobs so we only need \(d\) rows.</p>
        <p>Our algorithm always finds a number of rows equal to depth, so it is the best algorithm:</p>
        <ul>
          <li>Row \(d\) is opened because we need to schedule some job \(j\), which is incompatible with all the jobs in the other \(d-1\) rows</li>
          <li>So there are \(d\) jobs that finish after or at the same time as \(s_j\)</li>
          <li>Since we initially sorted by start time, each of these start no later than \(s_j\)</li>
          <li>So we have \(d\) jobs overlapping at time \(s_j + \epsilon\)</li>
        </ul>
      </div>
    );
  }

}

export default IntervalPartitioningProof;