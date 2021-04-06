import React from 'react';
import ExampleImage from '../ShortestNegWeights/example.png';

class BFMExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Given a weighted directed graph (where weights are potentially negative), find the shortest path from the source node $s$ to some destination node $t$, assuming there exists a path from every node to $t$.</p>
        <img src={ExampleImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default BFMExplanation;