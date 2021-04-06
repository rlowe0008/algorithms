import React from 'react';
import CodeRunner from '../../CodeRunner';

class BFM extends React.Component {

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

function bfm(edges, vertices) {
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
  return { d, successor };
}
    `;

    return (
      <div>
        <CodeRunner run='bfm(edges, vertices);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default BFM;