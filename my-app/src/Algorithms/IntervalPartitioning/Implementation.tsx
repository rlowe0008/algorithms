import React from 'react';
import CodeRunner from '../../CodeRunner';

class IntervalPartitioning extends React.Component {

  render() {

    const code = `
const jobs = [
  { start: 0, finish: 4 },
  { start: 4, finish: 8 },
  { start: 8, finish: 10 },
  { start: 0, finish: 3 },
  { start: 3, finish: 6 },
  { start: 6, finish: 9 },
  { start: 9, finish: 10 },
  { start: 2, finish: 5 },
  { start: 6, finish: 8 }
];

function intervalPartitioning(input) {
  // Sort by start times
  const jobsSorted = jobs.sort((j1, j2) => j1.start - j2.start);

  let output = [];

  // Iterate over the list, adding to a row if compatible

  for (const job of jobsSorted) {
    // The initial job must occupy a row
    if (output.length === 0) output.push([job]);
    else {
      // Check if compatible with the last item in the top-most row
      const topRow = output[0];
      const topmostLast = topRow[topRow.length - 1];
      if (topmostLast.finish <= job.start) {
        // Push to this row
        topRow.push(job);
      } else {
        // Create a new row
        output.push([job]);
      }
    }
    // Re-sort the output "priority queue"
    // A standard priority queue implementation would usually take care of this
    output = output.sort((row1, row2) => row1[row1.length - 1].finish - row2[row2.length - 1].finish);
  }

  return output;
}
    `;

    return (
      <div>
        <CodeRunner run='intervalPartitioning(jobs);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default IntervalPartitioning;