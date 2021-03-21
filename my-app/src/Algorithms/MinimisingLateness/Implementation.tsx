import React from 'react';
import CodeRunner from '../../CodeRunner';

class MinimisingLateness extends React.Component {

  render() {

    const code = `
const jobs = [
  { id: 1, time: 2, due: 8 },
  { id: 2, time: 4, due: 11 },
  { id: 3, time: 1, due: 14 },
  { id: 4, time: 3, due: 5 },
  { id: 5, time: 3, due: 3 },
  { id: 6, time: 1, due: 13 }
];

function minimisingLateness(input) {
  // Sort by due times
  let jobsSorted = jobs.sort((j1, j2) => j1.due - j2.due);
  
  // Iterate over the jobs, assigning to the correct interval
  let t = 0;
  for (let job of jobsSorted) {
    job.start = t;
    job.finish = t + job.time;
    t = job.finish;
  }

  return jobsSorted;
}
    `;

    return (
      <div>
        <CodeRunner run='minimisingLateness(jobs);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default MinimisingLateness;