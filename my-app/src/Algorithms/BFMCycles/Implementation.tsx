import React from 'react';
import CodeRunner from '../../CodeRunner';

class BFMCycles extends React.Component {

  render() {

    const code = `
const edges1 = [
  { start: 'S', end: 'A', cost: 3 },
  { start: 'S', end: 'C', cost: -1 },
  { start: 'A', end: 'B', cost: -6 },
  { start: 'B', end: 'C', cost: -2 },
  { start: 'C', end: 'A', cost: 9 },
  { start: 'B', end: 'D', cost: -1 },
  { start: 'C', end: 'D', cost: 3 }
];

const edges2 = [
  { start: 'S', end: 'A', cost: 3 },
  { start: 'S', end: 'C', cost: -1 },
  { start: 'A', end: 'B', cost: -6 },
  { start: 'B', end: 'C', cost: -2 },
  { start: 'C', end: 'A', cost: 4 },
  { start: 'B', end: 'D', cost: -1 },
  { start: 'C', end: 'D', cost: 3 }
];

const vertices = ['S', 'A', 'B', 'C', 'D'];

function bfm(edges, vertices) {
  // Create a new sink node T
  vertices.push('T');
  for (let i = 0; i < vertices.length - 1; i++) {
    edges.push({ start: vertices[i], end: 'T', cost: 0 });
  }

  let d = [];
  let successor = [];
  // For each node, d[v] = infty, successor is undefined
  for (let i = 0; i < vertices.length; i++) {
    d.push(Infinity);
    successor.push(undefined);
  }

  // Set d[t] = 0
  d[vertices.indexOf('T')] = 0;
  // Store vertices updated in previous pass (initially T)
  let updated = ['T'];

  // for i = 1 to n - 1
  for (let i = 1; i <= edges.length - 1; i++) {
    let updatedTemp = [];
    // For each vertex w
    for (let w of vertices) {
      // If w updated in previous pass...
      if (updated.indexOf(w) !== -1) {
        let Wix = vertices.indexOf(w);
        // For each edge (v, w)
        const incidentEdges = edges.filter(e => e.end === w);
        for (let edge of incidentEdges) {
          let Vix = vertices.indexOf(edge.start);
          // Update d[v] if current value > d[w] + length of edge(v, w)
          if (d[Vix] > d[Wix] + edge.cost) {
            d[Vix] = d[Wix] + edge.cost;
            successor[Vix] = w;
            updatedTemp.push(edge.start);
          }
        }
      }
    }
    updated = updatedTemp;
    console.log('Last update: ', updated);
  }
  // If ANY node is updated in the final pass return TRUE
  return updated.length !== 0;
}

function run() {
  return { example1: bfm(edges1, vertices), example2: bfm(edges2, vertices) };
}
    `;

    return (
      <div>
        <CodeRunner run='run();'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default BFMCycles;