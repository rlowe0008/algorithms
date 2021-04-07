import React from 'react';
import AlgorithmImage from './algorithm.png';

class BFMCyclesPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ol>
          <li>Add a new sink node $t$ to the graph and connect all edges to the sink node with a 0-length edge</li>
          <li>Run Bellman-Ford-Moore on the graph</li>
          <li>If any node has an updated shorter path to $t$ on the final iteration then there is a negative cycle</li>
        </ol>
        <img src={AlgorithmImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default BFMCyclesPseudocode;