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

type Vertex = {
  index: number,
  attachmentCost: number,
  minEdge: Edge | null
};

type VertexWeightList = {
  [key: number]: Vertex
};

type State = {
  tree: Edge[], // T, the best set of edges
  exploredVertices: number[], // S
  vertexWeightList: VertexWeightList,
  output: string
};

class Prims extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = { tree: [], exploredVertices: [], vertexWeightList: {}, output: '' };
    this.runAlgorithm = this.runAlgorithm.bind(this);
  }

  runAlgorithm() {
    //let outputString = '';
    this.setState({ tree: [], exploredVertices: [], vertexWeightList: {}, output: '' });
    // Put some node into the explored set
    const initialVertex = 1;
    let explored = this.state.exploredVertices;
    let tree = this.state.tree;
    let weights = this.state.vertexWeightList;
    explored.push(initialVertex);
    weights[initialVertex] = { index: initialVertex, attachmentCost: 0, minEdge: null };
    // Use a priority queue of edges (TODO)
    let priorityQueue: Vertex[] = [];
    // For each vertex, assign attachment cost and min edge
    const vertexList = Object.keys(this.props.adjacencyList).map(Number);
    for (const vertex of vertexList) {
      if (vertex === initialVertex) continue;
      this.setMinEdge(initialVertex, weights, vertex, this.props.adjacencyList[vertex], this.props.edgeWeightsList);
      // Store each node in a priority queue sorted by min cost
      // TODO...
      priorityQueue.push(weights[vertex]);
    }
    // While not empty: get lowest edge e & add to tree.
    while (priorityQueue.length > 0) {
      // TODO: Re-sort
      console.log(priorityQueue);
      console.log(tree);
      priorityQueue = priorityQueue.sort((a, b) => {
        if (a.attachmentCost < b.attachmentCost) return -1;
        else if (a.attachmentCost > b.attachmentCost) return 1;
        else return 0;
      });
      // Add the lowest
      const nextNode = priorityQueue[0];
      const bestEdge = priorityQueue[0].minEdge;
      if (bestEdge === null) throw new Error("Edge is null!"); // TODO
      priorityQueue.shift();
      tree.push(bestEdge);
      explored.push(nextNode.index);
      nextNode.attachmentCost = 0;
      // Get all vertices adjacent to e and re-calculate attachment cost
      const adjacentVertices = this.props.adjacencyList[nextNode.index];
      for (const adjacent of adjacentVertices) {
        // Ignore adjacent vertices already in S
        if (weights[adjacent].attachmentCost === 0) {
          continue;
        }
        const edge = this.findEdge(adjacent, nextNode.index, this.props.edgeWeightsList);
        if (edge === null) continue;
        if (edge.weight < weights[adjacent].attachmentCost) {
          weights[adjacent].attachmentCost = edge.weight;
          weights[adjacent].minEdge = edge;
        }
      }
    }
    console.log("DONE");
    console.log(tree);
  }

  setMinEdge(cloudVertex: number, weightsList: VertexWeightList, vertex: number, adjacentVertices: NeighbourList, edgeWeights: Edge[]) {
    // If the vertex is in the cloudset: ignore it
    if (weightsList[vertex] && weightsList[vertex].attachmentCost === 0) return;
    // Otherwise, see if the vertex can connect to any vertex in the cloudset
    // If no object exists yet, create one
    if (!weightsList[vertex]) weightsList[vertex] = { index: vertex, attachmentCost: Infinity, minEdge: null };
    // If this is the first pass, consider only the one vertex in 
    if (adjacentVertices.includes(cloudVertex)) { // TODO: With a good edge list lookup we can O(1) this by constructing the edge and calling findEdge
      // See if the attachment cost < current cost
      // Find the edge
      const edge = this.findEdge(vertex, cloudVertex, edgeWeights);
      if (edge === null) return;
      if (edge.weight < weightsList[vertex].attachmentCost) {
        weightsList[vertex].attachmentCost = edge.weight;
        weightsList[vertex].minEdge = edge;
      }
    }
  }

  findEdge(primaryVertex: number, secondaryVertex: number, edgeList: Edge[]) {
    // Return the Edge connecting two vertices
    if (primaryVertex > secondaryVertex) {
      const temp: number = primaryVertex;
      primaryVertex = secondaryVertex;
      secondaryVertex = temp;
    }
    // TODO, more efficient, possibly binary search if we have a sorted list of edges, or HashMap
    for (const edge of edgeList) {
      if (edge.primaryVertex === primaryVertex && edge.secondaryVertex === secondaryVertex) return edge;
    }
    return null;
  }

  render() {
    // TODO: Show a tree
    return (
      <div>
        <h1>Prim's goes here</h1>
        <p onClick={this.runAlgorithm}>Run</p>
        <div>
          {this.state.output}
        </div>
      </div>
    );
  }

}



export default Prims;