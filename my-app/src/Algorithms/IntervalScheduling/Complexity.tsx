import React from 'react';
import $ from '../../Math';

class IntervalSchedulingComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>The initial pre-processing step is the most computationally-expensive, requiring a sort (e.g. Merge Sort), which is an <$>O(n \log n)</$> operation. The final stage requires iterating over all jobs and checking if the current job is compatible with the last job added to the set S, which is overall an <$>O(n)</$> operation.</p>
      </div>
    );
  }

}

export default IntervalSchedulingComplexity;