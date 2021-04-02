import React from 'react';
import CodeRunner from '../../CodeRunner';

class WeightedIntervalScheduling extends React.Component {

  render() {

    const code = `
const jobs = [
  { start: 1, end: 4, weight: 3 },
  { start: 5, end: 9, weight: 7 },
  { start: 3, end: 5, weight: 1 },
  { start: 6, end: 10, weight: 2 },
  { start: 4, end: 11, weight: 9 },
  { start: 4, end: 7, weight: 6 },
  { start: 3, end: 8, weight: 5 },
  { start: 0, end: 6, weight: 4 }
];

function findP(job, jobs) {
  // Typical approach uses binary search for O(log n) complexity per job
  // This approach is more complex but more illustrative
  const compatibleJobs = jobs.filter((j) => j.end <= job.start);
  return compatibleJobs[compatibleJobs.length - 1];
}

function weightedIntervalScheduling(jobs) {
  // Sort jobs by finish time
  jobs = jobs.sort((j1, j2) => j1.end - j2.end);
  let p = [];
  let solutions = [];
  // Find compatible job with latest finish time
  for (let job of jobs) {
    p.push(findP(job, jobs));
  }
  console.log(p);
  let M = [];
  for (let i = 0; i < jobs.length; i++) {
    if (i === 0) {
      M.push(jobs[i].weight);
      solutions.push([jobs[i]]);
    } else if (p[i] !== undefined) {
      M.push(Math.max(M[i-1], jobs[i].weight + M[jobs.indexOf(p[i])]));
      // If wi + M[p[i]] > M[i - 1]:
      // solution for i is solution of p[i] U {i}
      // else: solution for i is solution for i - 1
      if (jobs[i].weight + M[jobs.indexOf(p[i])] > M[i - 1]) {
        solutions.push(solutions[jobs.indexOf(p[i])].concat([jobs[i]]));
      } else {
        solutions.push(solutions[i - 1]);
      }
    } else {
      // Case where no compatible predecessor
      M.push(Math.max(M[i-1], jobs[i].weight));
      if (jobs[i].weight > M[i - 1]) {
        solutions.push([jobs[i]]);
      } else {
        solutions.push(solutions[i - 1]);
      }
    }
  }
  return {
    jobs: solutions,
    weightSum: M
  };
}
    `;

    return (
      <div>
        <CodeRunner run='weightedIntervalScheduling(jobs);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default WeightedIntervalScheduling;