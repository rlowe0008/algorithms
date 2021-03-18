import React from 'react';

type NeighbourList = number[];

type AdjacencyList = {
  [key: number]: NeighbourList
};

type Edge = {
  // To make things easier: primaryVertex < secondaryVertex
  primaryVertex: number,
  secondaryVertex: number,
  weight: number
};

type Props = {
  adjacencyList: AdjacencyList,
  edgeWeightsList: Edge[]
};

type State = {
  tree: Edge[], // T, the best set of edges
  vertexSets: number[][], // Set of sets
  output: string
};

class Kruskals extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = { tree: [], vertexSets: [], output: '' };
    this.runAlgorithm = this.runAlgorithm.bind(this);
  }

  runAlgorithm() {
    //let outputString = '';
    let allowNegative = true;
    this.setState({ tree: [], vertexSets: [], output: '' });
    // Sort edges by cost
    const edgesSorted = this.props.edgeWeightsList.sort((a, b) => {
      if (a.weight < b.weight) return -1;
      else if (a.weight > b.weight) return 1;
      else return 0;
    });
    let tree = this.state.tree;
    let vertexSets = this.state.vertexSets;
    // Populate the vertex sets: initially each vertex is in a separate set
    const vertexList = Object.keys(this.props.adjacencyList).map(Number);
    for (const vertex of vertexList) {
      vertexSets.push([vertex]);
    }
    console.log(edgesSorted);
    // For each, if the nodes are not in the same component, add the edge to the tree
    // and union the node components
    for (const edge of edgesSorted) {
      if (edge.weight >= 0 && vertexSets.length === 1) {
        console.log("Terminating early");
        break;
      }
      const firstSetIndex = this.findSet(edge.primaryVertex, vertexSets);
      const secondSetIndex = this.findSet(edge.secondaryVertex, vertexSets);
      if (firstSetIndex !== secondSetIndex ||
        (allowNegative && edge.weight < 0)) {
        // Adding won't create a cycle, so add it
        tree.push(edge);
        // Union the sets
        this.unionSets(firstSetIndex, secondSetIndex, vertexSets);
        console.log(tree);
        console.log(vertexSets);
      }
    }
    console.log("DONE");
    console.log(tree);
  }

  findSet(vertex: number, vertexSets: number[][]) {
    // TODO
    for (let i = 0; i < vertexSets.length; i++) {
      if (vertexSets[i].includes(vertex)) return i;
    }
    throw new Error("Cannot find vertex");
  }

  unionSets(firstSetIndex: number, secondSetIndex: number, vertexSets: number[][]) {
    if (firstSetIndex === secondSetIndex) return;
    // TODO
    // Put all elements in the second set into the first set
    const firstSet = vertexSets[firstSetIndex];
    const secondSet = vertexSets[secondSetIndex];
    vertexSets.splice(secondSetIndex, 1);
    for (const vertex of secondSet) {
      firstSet.push(vertex);
    }
  }

  render() {
    // TODO: Show a tree
    return (
      <div>
        <h1>Kruskall's goes here</h1>
        <p onClick={this.runAlgorithm}>Run</p>
        <div>
          {this.state.output}
        </div>
      </div>
    );
  }

}



export default Kruskals;