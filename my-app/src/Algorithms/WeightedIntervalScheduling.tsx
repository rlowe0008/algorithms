import React from 'react';

type JobList = {
  id: number,
  job: [number, number],
  weight: number
}[];

type BasicJobList = {
  id: number,
  job: number,
  weight: number
}[];

type Props = {
  jobs: JobList,
  isBasic: false
} | {
  jobs: BasicJobList,
  width: number,
  isBasic: true
};

type State = {
  memory: number[],
  predecessors: number[],
  parsedJobs: JobList
}

class WeightedIntervalScheduling extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = { memory:[], predecessors: [], parsedJobs: [] };
    this.runAlgorithm = this.runAlgorithm.bind(this);
    this.latestCompatibleJob = this.latestCompatibleJob.bind(this);
    this.findSolution = this.findSolution.bind(this);
  }

  runAlgorithm() {
    // If we supply a BasicJobList, create a JobList from the given constant length
    let jobsList: JobList = [];
    if (this.props.isBasic) {
      for (const job of this.props.jobs) {
        jobsList.push({
          id: job.id,
          job: [job.job, job.job + this.props.width],
          weight: job.weight
        });
      }
    } else {
      jobsList = this.props.jobs;
    }

    // Sort by finish times
    jobsList = jobsList.sort((j1, j2) => j1.job[1] - j2.job[0]);
    // Compute all p(n) values
    let predecessors: number[] = [];
    for (let i = 0; i < jobsList.length; i++) {
      const foundP = this.latestCompatibleJob(jobsList, i);
      predecessors.push(foundP);
    }

    // Initialise M[j]
    let memory: number[] = [];
    for (let i = 0; i < jobsList.length; i++) {
      memory.push(0);
    }
    // Find the max value
    let solution: any = [];
    for (let i = 0; i < jobsList.length; i++) {
      if (i === 0) {
        // TODO - since we are 0 indexing, usually 0 will contain the empty job, not a -1 error
        memory[0] = jobsList[0].weight;
        solution.push([jobsList[0]]);
      } else if (predecessors[i] === -1) {
        // TODO - just 1 index here!!!
        memory[i] = Math.max(jobsList[i].weight, memory[i-1]);
        if (jobsList[i].weight > memory[i-1]) solution.push([jobsList[i]]);
        else solution.push(solution[i-1]);
      } else {
        memory[i] = Math.max(jobsList[i].weight + memory[predecessors[i]], memory[i-1]);
        if (jobsList[i].weight + memory[predecessors[i]]) {
          const predSol = Array.from(solution[predecessors[i]]);
          predSol.push(jobsList[i]);
          solution.push(predSol);
        }
        else solution.push(solution[i-1]);
      }
      console.log(memory);
      console.log(solution);
    }
    // TODO: Unwind this recursion too...
    const maxSolution = this.findSolution(jobsList.length - 1, memory, predecessors, jobsList);
    console.log(maxSolution.toString() + " => " + memory[memory.length - 1]);
  }

  findSolution(j: number, memory: number[], predecessors: number[], jobsList: JobList): number[] {
    if (predecessors[j] === -1) return [j];
    
    if (jobsList[j].weight + memory[predecessors[j]] >= memory[j - 1]) {
      let solution = this.findSolution(predecessors[j], memory, predecessors, jobsList);
      solution.push(j);
      return solution;
    } else {
      return this.findSolution(j - 1, memory, predecessors, jobsList);
    }
  }

  latestCompatibleJob(jobs: JobList, jobIndex: number) {
    // Find the first job compatible with the given job
    // I.e. the first job that finishes BEFORE the given job starts
    // TODO: Binary search instead
    // Work back to find the job
    let foundJobStartTime: number = jobs[jobIndex].job[0];
    for (let i = jobIndex - 1; i >= 0; i--) {
      if (jobs[i].job[1] <= foundJobStartTime) return i;
    }
    // No job compatible...
    return -1;
  }

  render() {
    return (
      <div>
        <h1>Weighted interval scheduling goes here</h1>
        <p onClick={this.runAlgorithm}>Run</p>
      </div>
    );
  }

}

export default WeightedIntervalScheduling;