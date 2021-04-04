import React from 'react';
import CodeRunner from '../../CodeRunner';

class ShortestNegWeights extends React.Component {

  render() {

    const code = `
const edges = [
  { start: 'S', end: 'A', cost: 3 },
  { start: 'S', end: 'C', cost: -1 },
  { start: 'A', end: 'B', cost: -6 },
  { start: 'B', end: 'C', cost: -2 },
  { start: 'A', end: 'C', cost: 4 },
  { start: 'B', end: 'T', cost: -1 },
  { start: 'C', end: 'T', cost: 3 }
];

const vertices = ['S', 'A', 'B', 'C', 'T'];

function shortestPaths(edges, vertices) {
  // Create the e x v table
  let M = [];
  for (let i = 0; i < edges.length; i++) {
    let row = [];
    for (let j = 0; j < vertices.length; j++) {
      row.push(0);
    }
    M.push(row);
  }

  // For each node v: M[0, v] = infty
  for (let i = 0; i < vertices.length; i++) {
    M[0][i] = Infinity;
  }

  // Set M[0, s] = 0
  M[0][vertices.indexOf('T')] = 0;

  // For i = 1 to n - 1
  for (let i = 1; i <= edges.length - 1; i++) {
    // For each node
    for (let j = 0; j < vertices.length; j++) {
      M[i][j] = M[i - 1][j];
      // For each edge from current vertex, update M
      const incidentEdges = edges.filter(e => e.start === vertices[j]);
      for (let edge of incidentEdges) {
        const w = vertices.indexOf(edge.end);
        M[i][j] = Math.min(M[i][j], M[i - 1][w] + edge.cost);
      }
    }
  }
  console.log(M);
  return M[edges.length - 1][vertices.indexOf('S')];
}
    `;

    return (
      <div>
        <CodeRunner run='shortestPaths(edges, vertices);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default ShortestNegWeights;