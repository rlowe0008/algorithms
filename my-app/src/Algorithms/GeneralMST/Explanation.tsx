import React from 'react';
import BlueRule from '../Common/BlueRule';
import CyclesCutsets from '../Common/CyclesCutsets';
import MinimumSpanningTree from '../Common/MinimumSpanningTree';
import RedRule from '../Common/RedRule';
import ExampleImage from './example.png';

class GeneralMSTExplanation extends React.Component {

  render() {
    return (
      <div>
        <MinimumSpanningTree />
        <CyclesCutsets />
        <RedRule />
        <BlueRule />
        <ul>
          <li><b>Input</b>: A weighted, undirected graph $G = (V, E)$</li>
          <li><b>Output</b>: A minimum spanning tree of $G$</li>
        </ul>
        <img src={ExampleImage} className="img-fluid" alt="An example input and output" />
      </div>
    );
  }

}

export default GeneralMSTExplanation;