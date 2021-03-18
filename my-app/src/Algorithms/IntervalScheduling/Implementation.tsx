import React from 'react';
import CodeRunner from '../../CodeRunner';

class IntervalScheduling extends React.Component {

  render() {

    const code = `
const jobs = [
  {
    start: 7,
    finish: 9
  },
  {
    start: 0,
    finish: 3
  },
  {
    start: 5,
    finish: 8
  },
  {
    start: 0,
    finish: 4
  },
  {
    start: 9,
    finish: 10
  },
  {
    start: 1,
    finish: 4
  },
  {
    start: 4,
    finish: 6
  },
  {
    start: 5,
    finish: 9
  }
];

function intervalScheduling(input) {
  // Sort by finish times
  const jobsSorted = jobs.sort((j1, j2) => j1.finish - j2.finish);

  let output = [];

  // Iterate over the list, adding to the set if compatible with the last item in the set
  // Compatible = starts after job ends

  for (const job of jobsSorted) {
    if (output.length === 0) output.push(job);
    else if (output[output.length - 1].finish <= job.start) output.push(job);
  }

  return output;
}
    `;

    return (
      <div>
        <CodeRunner run='intervalScheduling(jobs);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default IntervalScheduling;