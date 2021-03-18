import React from 'react';
import { Pages } from './App';

// Import algorithms
import Prims from './Algorithms/Prims';
import Kruskals from './Algorithms/Kruskals';
import IntervalScheduling from './Algorithms/IntervalScheduling/Implementation';
import WeightedIntervalScheduling from './Algorithms/WeightedIntervalScheduling';
import IntervalSchedulingComplexity from './Algorithms/IntervalScheduling/Complexity';
import IntervalSchedulingPseudocode from './Algorithms/IntervalScheduling/Pseudocode';
import IntervalSchedulingExplanation from './Algorithms/IntervalScheduling/Explanation';
import $ from './Math';
import IntervalSchedulingProof from './Algorithms/IntervalScheduling/Proof';

interface Props {
  selectedAlgorithm: Pages;
}

type AlgorithmDescriptor = {
  name: string;
  description: string;
  explanation: string | JSX.Element;
  complexity: string;
  complexityProof: string | JSX.Element;
  correctnessProof: string | JSX.Element;
  pseudocode: string | JSX.Element;
}

interface AlgorithmDescriptorSet {
  [key: string]: AlgorithmDescriptor;
}

const descriptors: AlgorithmDescriptorSet = {
  'interval scheduling': {
    name: "Earliest-finish-time-first for interval scheduling",
    description: "There is a set of items where each one occupies some interval, each with a start time and finish time. Items are compatible if they do not overlap. Find the maximum subset of mutually-compatible items.",
    explanation: <IntervalSchedulingExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <IntervalSchedulingComplexity />,
    correctnessProof: <IntervalSchedulingProof />,
    pseudocode: <IntervalSchedulingPseudocode />
  }
};

class Algorithm extends React.Component<Props> {

  render() {
    // Lookup algorithm descriptor for page
    let selectedDescriptor: AlgorithmDescriptor | undefined;
    let algorithmComponent: JSX.Element | undefined;

    const adjacencyList = {
      1: [2, 3, 5],
      2: [1, 3, 4, 5],
      3: [1, 2, 4],
      4: [2, 3, 5],
      5: [1, 2, 4]
    };
    const edgeWeightsList = [
      { primaryVertex: 1, secondaryVertex: 2, weight: 1 },
      { primaryVertex: 1, secondaryVertex: 3, weight: -4 }, //-4
      { primaryVertex: 1, secondaryVertex: 5, weight: 3 },
      { primaryVertex: 2, secondaryVertex: 3, weight: 2 },
      { primaryVertex: 2, secondaryVertex: 4, weight: -2 }, //-2
      { primaryVertex: 2, secondaryVertex: 5, weight: -3 }, //-3
      { primaryVertex: 3, secondaryVertex: 4, weight: 4 },
      { primaryVertex: 4, secondaryVertex: 5, weight: -1 } //-1
    ];

    const weightedJobsList = [
      { id: 1, job: 0, weight: 2 },
      { id: 2, job: 20, weight: 1 },
      { id: 3, job: 30, weight: 4 },
      { id: 4, job: 40, weight: 3 },
      { id: 5, job: 60, weight: 3 },
      { id: 6, job: 70, weight: 4 },
      { id: 7, job: 100, weight: 4 },
    ];

    switch (this.props.selectedAlgorithm) {
      case Pages.Prims:
        selectedDescriptor = descriptors['prims'];
        algorithmComponent = <Prims adjacencyList={adjacencyList} edgeWeightsList={edgeWeightsList} />;
        break;
      case Pages.Kruskals:
        selectedDescriptor = descriptors['kruskals'];
        algorithmComponent = <Kruskals adjacencyList={adjacencyList} edgeWeightsList={edgeWeightsList} />;
        break;
      case Pages.IntervalScheduling:
        selectedDescriptor = descriptors['interval scheduling'];
        algorithmComponent = <IntervalScheduling />;
        break;
      case Pages.WeightedIntervalScheduling:
        selectedDescriptor = descriptors['weighted interval scheduling'];
        algorithmComponent = <WeightedIntervalScheduling jobs={weightedJobsList} width={30} isBasic={true} />;
        break;
      default:
        return;
    }
    return (
      <div>
        <h1 style={{ 'marginTop': '50px' }}>{ selectedDescriptor.name }</h1>
        <div className="alert alert-primary" role="alert">
          { selectedDescriptor.description }
        </div>
        <h3>Explanation</h3>
        { selectedDescriptor.explanation }
        <h3>Algorithm</h3>
        { selectedDescriptor.pseudocode }
        <h3>Complexity: <$>{ selectedDescriptor.complexity }</$> </h3>
        { selectedDescriptor.complexityProof }
        <h3>Proof of correctness</h3>
        { selectedDescriptor.correctnessProof }
        <h3>Demo</h3>
        { algorithmComponent }
      </div>
    );
  }

}

export default Algorithm;