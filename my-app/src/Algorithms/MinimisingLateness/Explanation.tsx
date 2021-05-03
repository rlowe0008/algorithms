import React from 'react';
import ExampleImage from './example.png';

class MinimisingLatenessExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Shortest-job-first does not guarantee a minimal maximum-lateness. However, scheduling jobs with the earliest deadline first can ensure this.</p>
        <img src={ExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default MinimisingLatenessExplanation;