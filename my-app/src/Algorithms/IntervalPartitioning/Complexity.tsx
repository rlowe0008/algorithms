import React from 'react';

class IntervalPartitioningComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>Sorting is an \(O (n \log n)\) operation. Jobs must then be stored in a <a href="https://en.wikipedia.org/wiki/Priority_queue" rel="noreferrer" target="_blank">priority queue</a>, where the key for each element is the finish time of the last job:</p>
        <ul>
          <li>Row allocation: insert row into priority queue</li>
          <li>Schedule job \(j\) in row \(k\): set the key of row \(k\) to \(f_i\)</li>
          <li>To determine if \(j\) is compatible with any row, compare \(s_j\) to the lowest finishing time in the priority queue</li>
          <li>Total number of priority queue operations is \(O(n)\), each of which takes \(O (\log n)\) time. Hence the overall complexity is \(O (n \log n)\)</li>
        </ul>
      </div>
    );
  }

}

export default IntervalPartitioningComplexity;