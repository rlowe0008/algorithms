import React from 'react';
import { Pages } from './App';

// Import algorithms
import IntervalScheduling from './Algorithms/IntervalScheduling/Implementation';
import IntervalSchedulingComplexity from './Algorithms/IntervalScheduling/Complexity';
import IntervalSchedulingPseudocode from './Algorithms/IntervalScheduling/Pseudocode';
import IntervalSchedulingExplanation from './Algorithms/IntervalScheduling/Explanation';
import $ from './Math';
import IntervalSchedulingProof from './Algorithms/IntervalScheduling/Proof';
import IntervalPartitioningExplanation from './Algorithms/IntervalPartitioning/Explanation';
import IntervalPartitioningPseudocode from './Algorithms/IntervalPartitioning/Pseudocode';
import IntervalPartitioningComplexity from './Algorithms/IntervalPartitioning/Complexity';
import IntervalPartitioningProof from './Algorithms/IntervalPartitioning/Proof';
import IntervalPartitioning from './Algorithms/IntervalPartitioning/Implementation';
import MinimisingLatenessExplanation from './Algorithms/MinimisingLateness/Explanation';
import MinimisingLatenessPseudocode from './Algorithms/MinimisingLateness/Pseudocode';
import MinimisingLatenessProof from './Algorithms/MinimisingLateness/Proof';
import MinimisingLateness from './Algorithms/MinimisingLateness/Implementation';
import DijkstrasExplanation from './Algorithms/Dijkstras/Explanation';
import DijkstrasPseudocode from './Algorithms/Dijkstras/Pseudocode';
import DijkstrasComplexity from './Algorithms/Dijkstras/Complexity';
import DijkstrasProof from './Algorithms/Dijkstras/Proof';
import Dijkstras from './Algorithms/Dijkstras/Implementation';
import GeneralMSTExplanation from './Algorithms/GeneralMST/Explanation';
import GeneralMSTProof from './Algorithms/GeneralMST/Proof';
import PrimsExplanation from './Algorithms/Prims/Explanation';
import PrimsPseudocode from './Algorithms/Prims/Pseudocode';
import KruskalsExplanation from './Algorithms/Kruskals/Explanation';
import KruskalsComplexity from './Algorithms/Kruskals/Complexity';
import KruskalsPseudocode from './Algorithms/Kruskals/Pseudocode';
import PrimsAlgorithm from './Algorithms/Prims/Implementation';
import PrimsProof from './Algorithms/Prims/Proof';
import KruskalsAlgorithm from './Algorithms/Kruskals/Implementation';
import KruskalsProof from './Algorithms/Kruskals/Proof';
import BinarySearchPseudocode from './Algorithms/BinarySearch/Pseudocode';
import BinarySearchComplexity from './Algorithms/BinarySearch/Complexity';
import BinarySearchProof from './Algorithms/BinarySearch/Proof';
import BinarySearch from './Algorithms/BinarySearch/Implementation';

interface Props {
  selectedAlgorithm: Pages;
}

type AlgorithmDescriptor = {
  name: string;
  description: string;
  explanation: string | JSX.Element;
  complexity: string;
  complexityProof: string | JSX.Element | undefined;
  correctnessProof: string | JSX.Element;
  pseudocode: string | JSX.Element;
  algorithm: JSX.Element | undefined;
}

interface AlgorithmDescriptorSet {
  [key: string]: AlgorithmDescriptor;
}

const descriptors: AlgorithmDescriptorSet = {
  'interval-scheduling': {
    name: "Earliest-finish-time-first for interval scheduling",
    description: "There is a set of items where each one occupies some interval, each with a start time and finish time. Items are compatible if they do not overlap. Find the maximum subset of mutually-compatible items.",
    explanation: <IntervalSchedulingExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <IntervalSchedulingComplexity />,
    correctnessProof: <IntervalSchedulingProof />,
    pseudocode: <IntervalSchedulingPseudocode />,
    algorithm: <IntervalScheduling />
  },
  'interval-partitioning': {
    name: "Earliest-start-time-first for interval partitioning",
    description: "There is a set of items where each one occupies some interval, each with a start time and finish time. Partition the set of items such that no two items overlap using the minimum number of rows.",
    explanation: <IntervalPartitioningExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <IntervalPartitioningComplexity />,
    correctnessProof: <IntervalPartitioningProof />,
    pseudocode: <IntervalPartitioningPseudocode />,
    algorithm: <IntervalPartitioning />
  },
  'minimising-lateness': {
    name: "Earliest-deadline-first for minimising lateness",
    description: "We have a single resource that can complete jobs. We need to schedule jobs for this resource to minimise the maximum lateness across the jobs.",
    explanation: <MinimisingLatenessExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: "This algorithm runs entirely on the basis of scheduling jobs that need to finished sooner. The initial sort is the most complex part.",
    correctnessProof: <MinimisingLatenessProof />,
    pseudocode: <MinimisingLatenessPseudocode />,
    algorithm: <MinimisingLateness />
  },
  'dijkstras': {
    name: "Dijkstra's algorithm for shortest paths",
    description: "Given a directed graph with no negative edges, find the shortest path between some source node and all other nodes in the graph.",
    explanation: <DijkstrasExplanation />,
    complexity: String.raw`O(e \log v)`,
    complexityProof: <DijkstrasComplexity />,
    correctnessProof: <DijkstrasProof />,
    pseudocode: <DijkstrasPseudocode />,
    algorithm: <Dijkstras />
  },
  'general-mst': {
    name: "General MST Algorithm",
    description: "A generic algorithm for finding the Minimum Spanning Tree of a graph.",
    explanation: <GeneralMSTExplanation />,
    complexity: "N/A",
    complexityProof: undefined,
    correctnessProof: <GeneralMSTProof />,
    pseudocode: String.raw`Greedy algorithm: Apply the red and blue rules (in an arbitrary, nondeterministic order) until all edges are coloured. The blue edges form an MST. We can stop once $\mid V \mid-1$ edges are coloured blue, since any MST has $\mid V \mid-1$ edges.`,
    algorithm: undefined
  },
  'prims': {
    name: "Prim's Algorithm",
    description: "Find the minimum spanning tree for some weighted, undirected graph, by applying the Blue Rule (fundamental cutset)",
    explanation: <PrimsExplanation />,
    complexity: String.raw`O(e \log v)`,
    complexityProof: "By the same priority queue method as Dijkstra's algorithm.",
    correctnessProof: <PrimsProof />,
    pseudocode: <PrimsPseudocode />,
    algorithm: <PrimsAlgorithm />
  },
  'kruskals': {
    name: "Kruskal's Algorithm",
    description: "Find the minimum spanning tree for some weighted, undirected graph, by applying the Red Rule (fundamental cycle)",
    explanation: <KruskalsExplanation />,
    complexity: String.raw`O(e \log e)`,
    complexityProof: <KruskalsComplexity />,
    correctnessProof: <KruskalsProof />,
    pseudocode: <KruskalsPseudocode />,
    algorithm: <KruskalsAlgorithm />
  },
  'binary-search': {
    name: "Binary search",
    description: "Given a sorted array $A$ of $n$ elements, find the position of a target element $T$.",
    explanation: "Find the index of some target element in a sorted list. Usage: Finding values in a list, seeing if values exist in a list, set operations.",
    complexity: String.raw`O(\log n)`,
    complexityProof: <BinarySearchComplexity />,
    correctnessProof: <BinarySearchProof />,
    pseudocode: <BinarySearchPseudocode />,
    algorithm: <BinarySearch />
  }
};

class Algorithm extends React.Component<Props> {

  render() {
    // Lookup algorithm descriptor for page
    let selectedDescriptor: AlgorithmDescriptor = descriptors[this.props.selectedAlgorithm];
  
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
        { selectedDescriptor.complexityProof &&
        <>
          <h3>Complexity: <$>{ selectedDescriptor.complexity }</$> </h3>
          { selectedDescriptor.complexityProof }
        </>
        }
        <h3>Proof of correctness</h3>
        { selectedDescriptor.correctnessProof }
        { selectedDescriptor.algorithm ? <h3>Demo</h3> : <></> }
        { selectedDescriptor.algorithm }
      </div>
    );
  }

}

export default Algorithm;