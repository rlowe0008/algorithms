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
import MergesortPseudocode from './Algorithms/Mergesort/Pseudocode';
import MergesortComplexity from './Algorithms/Mergesort/Complexity';
import MergesortProof from './Algorithms/Mergesort/Proof';
import Mergesort from './Algorithms/Mergesort/Implementation';
import ClosestPointsExplanation from './Algorithms/ClosestPoints/Explanation';
import ClosestPointsComplexity from './Algorithms/ClosestPoints/Complexity';
import ClosestPointsProof from './Algorithms/ClosestPoints/Proof';
import ClosestPointsPseudocode from './Algorithms/ClosestPoints/Pseudocode';
import ClosestPoints from './Algorithms/ClosestPoints/Implementation';
import KaratsubaExplanation from './Algorithms/Karatsuba/Explanation';
import KaratsubaComplexity from './Algorithms/Karatsuba/Complexity';
import KaratsubaProof from './Algorithms/Karatsuba/Proof';
import KaratsubaPseudocode from './Algorithms/Karatsuba/Pseudocode';
import WISComplexity from './Algorithms/WeightedIntervalScheduling/Complexity';
import WISProof from './Algorithms/WeightedIntervalScheduling/Proof';
import WISPseudocode from './Algorithms/WeightedIntervalScheduling/Pseudocode';
import WISExplanation from './Algorithms/WeightedIntervalScheduling/Explanation';
import WeightedIntervalScheduling from './Algorithms/WeightedIntervalScheduling/Implementation';
import KnapsackExplanation from './Algorithms/Knapsack/Explanation';
import KnapsackComplexity from './Algorithms/Knapsack/Complexity';
import KnapsackProof from './Algorithms/Knapsack/Proof';
import KnapsackPseudocode from './Algorithms/Knapsack/Pseudocode';
import Knapsack from './Algorithms/Knapsack/Implementation';
import SequenceAlignmentExplanation from './Algorithms/SequenceAlignment/Explanation';
import SequenceAlignmentProof from './Algorithms/SequenceAlignment/Proof';
import SequenceAlignmentPseudocode from './Algorithms/SequenceAlignment/Pseudocode';
import SequenceAlignment from './Algorithms/SequenceAlignment/Implementation';
import ShortestNegWeightsExplanation from './Algorithms/ShortestNegWeights/Explanation';
import ShortestNegWeightsProof from './Algorithms/ShortestNegWeights/Proof';
import ShortestNegWeightsPseudocode from './Algorithms/ShortestNegWeights/Pseudocode';
import ShortestNegWeightsComplexity from './Algorithms/ShortestNegWeights/Complexity';
import ShortestNegWeights from './Algorithms/ShortestNegWeights/Implementation';
import BFMExplanation from './Algorithms/BFM/Explanation';
import BFMPseudocode from './Algorithms/BFM/Pseudocode';
import BFMComplexity from './Algorithms/BFM/Complexity';
import BFMCorrectness from './Algorithms/BFM/Correctness';
import BFM from './Algorithms/BFM/Implementation';
import BFMCyclesExplanation from './Algorithms/BFMCycles/Explanation';
import BFMCycles from './Algorithms/BFMCycles/Implementation';
import BFMCyclesPseudocode from './Algorithms/BFMCycles/Pseudocode';

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
    description: "There is a set of $n$ items where each one occupies some interval, each with a start time and finish time. Items are compatible if they do not overlap. Find the maximum subset of mutually-compatible items.",
    explanation: <IntervalSchedulingExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <IntervalSchedulingComplexity />,
    correctnessProof: <IntervalSchedulingProof />,
    pseudocode: <IntervalSchedulingPseudocode />,
    algorithm: <IntervalScheduling />
  },
  'interval-partitioning': {
    name: "Earliest-start-time-first for interval partitioning",
    description: "There is a set of $n$ items where each one occupies some interval, each with a start time and finish time. Partition the set of items such that no two items overlap using the minimum number of rows.",
    explanation: <IntervalPartitioningExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <IntervalPartitioningComplexity />,
    correctnessProof: <IntervalPartitioningProof />,
    pseudocode: <IntervalPartitioningPseudocode />,
    algorithm: <IntervalPartitioning />
  },
  'minimising-lateness': {
    name: "Earliest-deadline-first for minimising lateness",
    description: "We have a single resource that can complete jobs. We need to schedule $n$ jobs for this resource to minimise the maximum lateness across the jobs.",
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
    complexity: String.raw`O(\mid E \mid \log \mid V \mid)`,
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
    complexity: String.raw`O(\mid E \mid \log \mid V \mid)`,
    complexityProof: "By the same priority queue method as Dijkstra's algorithm.",
    correctnessProof: <PrimsProof />,
    pseudocode: <PrimsPseudocode />,
    algorithm: <PrimsAlgorithm />
  },
  'kruskals': {
    name: "Kruskal's Algorithm",
    description: "Find the minimum spanning tree for some weighted, undirected graph, by applying the Red Rule (fundamental cycle)",
    explanation: <KruskalsExplanation />,
    complexity: String.raw`O(\mid E \mid \log \mid E \mid)`,
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
  },
  'mergesort': {
    name: "Mergesort",
    description: "Given a list $L$ of $n$ elements, rearrange them in ascending order.",
    explanation: "Input: a list of elements and some total order by which they can be arranged. Output: sorted list. This algorithm works by splitting the input list in two, recursively sorting both halves, then merging the two halves to make a sorted whole.",
    complexity: String.raw`O(n \log n)`,
    complexityProof: <MergesortComplexity />,
    correctnessProof: <MergesortProof />,
    pseudocode: <MergesortPseudocode />,
    algorithm: <Mergesort />
  },
  'closest-points': {
    name: "Closest pair of points",
    description: "Given $n$ points in the plane, find a pair of points with the smallest Euclidean distance between them.",
    explanation: <ClosestPointsExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <ClosestPointsComplexity />,
    correctnessProof: <ClosestPointsProof />,
    pseudocode: <ClosestPointsPseudocode />,
    algorithm: <ClosestPoints />
  },
  'karatsuba': {
    name: "Karatsuba's integer multiplication algorithm",
    description: "Given two $n$-bit integers $x,y$, multiply them together (at a binary level).",
    explanation: <KaratsubaExplanation />,
    complexity: String.raw`O(n^{1.585})`,
    complexityProof: <KaratsubaComplexity />,
    correctnessProof: <KaratsubaProof />,
    pseudocode: <KaratsubaPseudocode />,
    algorithm: undefined
  },
  'weighted-interval-scheduling': {
    name: "Weighted interval scheduling",
    description: "For a set of $n$ jobs with weights, find the maximum-weight subset of mutually-compatible jobs.",
    explanation: <WISExplanation />,
    complexity: String.raw`O(n \log n)`,
    complexityProof: <WISComplexity />,
    correctnessProof: <WISProof />,
    pseudocode: <WISPseudocode />,
    algorithm: <WeightedIntervalScheduling />
  },
  'knapsack': {
    name: "Knapsack algorithm",
    description: "For a set of $n$ items, each with a value and weight, find the maximum total value of items that can be stored without exceeding some total weight $W$.",
    explanation: <KnapsackExplanation />,
    complexity: String.raw`\Theta(n W)`,
    complexityProof: <KnapsackComplexity />,
    correctnessProof: <KnapsackProof />,
    pseudocode: <KnapsackPseudocode />,
    algorithm: <Knapsack />
  },
  'sequence-alignment': {
    name: "Sequence alignment",
    description: "Find an alignment between two strings (of lengths $m, n$) that minimises the edit distance between them.",
    explanation: <SequenceAlignmentExplanation />,
    complexity: String.raw`\Theta(mn)`,
    complexityProof: String.raw`For strings of length $m,n$: $\Theta(mn)$`,
    correctnessProof: <SequenceAlignmentProof />,
    pseudocode: <SequenceAlignmentPseudocode />,
    algorithm: <SequenceAlignment />
  },
  'shortest-neg-weights': {
    name: "Shortest path (graph with negative weights)",
    description: "Find the shortest path from a source to a destination when the graph contains negative edge weights.",
    explanation: <ShortestNegWeightsExplanation />,
    complexity: String.raw`\Theta(\mid E \mid \mid V \mid)`,
    complexityProof: <ShortestNegWeightsComplexity />,
    correctnessProof: <ShortestNegWeightsProof />,
    pseudocode: <ShortestNegWeightsPseudocode />,
    algorithm: <ShortestNegWeights />
  },
  'bfm': {
    name: "Bellman-Ford-Moore algorithm",
    description: "Find the shortest path from a source to a destination when the graph contains negative edge weights (in linear space).",
    explanation: <BFMExplanation />,
    complexity: String.raw`\Theta(\mid E \mid \mid V \mid)`,
    complexityProof: <BFMComplexity />,
    correctnessProof: <BFMCorrectness />,
    pseudocode: <BFMPseudocode />,
    algorithm: <BFM />
  },
  'bfm-cycles': {
    name: "Bellman-Ford-Moore algorithm (negative cycles)",
    description: "Given a digraph $G=(V,E)$ with edge lengths $l_{vw}$, find a negative cycle if one exists.",
    explanation: <BFMCyclesExplanation />,
    complexity: String.raw`\Theta(\mid E \mid \mid V \mid)`,
    complexityProof: "By Bellman-Ford-Moore algorithm.",
    correctnessProof: "See proof of Bellman-Ford-Moore. Proof that this algorithm finds negative cycles is given above.",
    pseudocode: <BFMCyclesPseudocode />,
    algorithm: <BFMCycles />
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