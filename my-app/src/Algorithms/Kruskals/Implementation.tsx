import React from 'react';
import CodeRunner from '../../CodeRunner';

class KruskalsAlgorithm extends React.Component {

  render() {

    const code = `
const edges = [
  { vertices: ['S', 'A'], weight: 3 },
  { vertices: ['A', 'B'], weight: 6 },
  { vertices: ['B', 'D'], weight: 1 },
  { vertices: ['D', 'C'], weight: 3 },
  { vertices: ['C', 'B'], weight: 2 },
  { vertices: ['S', 'C'], weight: 1 },
  { vertices: ['A', 'C'], weight: 4}
];

const labels = ['S', 'A', 'B', 'C', 'D'];

function unionSets(firstSetIndex, secondSetIndex, vertexSets) {
  // Put all elements in the second set into the first set
  const firstSet = vertexSets[firstSetIndex];
  const secondSet = vertexSets[secondSetIndex];
  vertexSets.splice(secondSetIndex, 1);
  for (const vertex of secondSet) {
    firstSet.push(vertex);
  }
}

function findSet(vertexSets, vertex) {
  // A naive implementation of find-set
  for (let i = 0; i < vertexSets.length; i++) {
    if (vertexSets[i].includes(vertex)) return i;
  }
  return -1;
}

function kruskals(edges, labels) {
  // Sort edges by cost
  const edgesSorted = edges.sort((e1, e2) => e1.weight - e2.weight);
  // Store tree
  let mst = [];
  // Put each vertex into its own set
  let vertexSets = [];
  for (let label of labels) {
    vertexSets.push([label]);
  }
  // Iterate over the set of edges, pushing to mst if it won't create a cycle
  for (let edge of edgesSorted) {
    const vertex1 = edge.vertices[0];
    const v1Ix = findSet(vertexSets, vertex1);
    const vertex2 = edge.vertices[1];
    const v2Ix = findSet(vertexSets, vertex2);
    if (v1Ix !== v2Ix) {
      // Join components
      unionSets(v1Ix, v2Ix, vertexSets);
      // Add the edge to the tree
      mst.push(edge);
    }
  }
  return mst;
}
    `;

    return (
      <div>
        <CodeRunner run='kruskals(edges, labels);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default KruskalsAlgorithm;