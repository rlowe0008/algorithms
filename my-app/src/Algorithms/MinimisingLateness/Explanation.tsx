import React from 'react';
import ExampleImage from './example.png';

class MinimisingLatenessExplanation extends React.Component {

  render() {
    return (
      <div>
        <p><b>Input</b>: a set of jobs, each requiring \(t_j\) units of processing time and due at \(d_j\). Hence the job finishes at \(f_j = s_j + t_j\).</p>
        <p><b>Output</b>: a schedule of jobs to minimise maximum lateness</p>
        <img src={ExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default MinimisingLatenessExplanation;