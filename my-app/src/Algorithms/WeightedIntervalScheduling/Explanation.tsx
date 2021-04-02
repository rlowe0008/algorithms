import React from 'react';
import ExampleImage from './example.png';

class WISExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>A job $j$ starts at $s_j$, finishes at $f_j$, and has weight Mw_j \gt 0$.</p>
        <p>Two jobs are <b>compatible</b> if they do not overlap.</p>
        <p>The goal is to find the maximum-weight subset of mutually-compatible jobs.</p>
        <img src={ExampleImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default WISExplanation;