import React from 'react';
import CodeRunner from '../../CodeRunner';

class Dijkstras extends React.Component {

  render() {

    const code = `
// Weighted adjacency matrix, with N representing no connection
const N = undefined;
const EXPLORED = undefined;
const graph = [
  [N, 3, N, 1, N],
  [3, N, 6, 4, N],
  [N, 6, N, 2, 1],
  [1, 4, 2, N, 3],
  [N, N, 1, 3, N]
];
const labels = ['S', 'A', 'B', 'C', 'D'];

function extractMin(set) {
  // Iterate over the set, extracting the min-value index
  // For an array this is O(n)
  let minValue = Infinity;
  let minNode = undefined;
  for (let i = 0; i < set.length; i++) {
    if (set[i].value === EXPLORED) continue;
    if (set[i].value < minValue) {
      minValue = set[i].value;
      minNode = set[i];
    }
  }
  return minNode;
}

function decreaseKey(set, index, key) {
  // Decrease the key of some item
  // For an array this is O(1)
  if (set[index].value === EXPLORED) return false;
  if (set[index].value > key) {
    set[index].value = key;
    return true;
  }
  return false;
}

function dijkstras(graph, labels) {
  let priorityQueue = [];

  // Put all nodes in the priority queue
  for (let i = 0; i < graph.length; i++) {
    if (labels[i] === 'S') {
      // Distance to source node is 0
      priorityQueue.push({ value: 0, label: labels[i], index: i });
    } else {
      // Distance to all other nodes is infinity
      priorityQueue.push({ value: Infinity, label: labels[i], index: i });
    }
  }

  let weights = {};
  let prevNodes = {};

  let min = extractMin(priorityQueue);
  while (min !== undefined) {
    // Add to explored set
    weights[min.label] = min.value;
    // Reconsider all adjacent edges
    for (let i = 0; i < graph.length; i++) {
      const edge = graph[min.index][i];
      if (edge === N) continue;
      const newValue = edge + min.value;
      if (decreaseKey(priorityQueue, i, newValue)) {
        prevNodes[labels[i]] = min.label;
      }
    }
    // Mark min as explored
    min.value = EXPLORED;
    // Fetch the new min
    min = extractMin(priorityQueue);
  }
  return { weights, prevNodes };
}
    `;

    return (
      <div>
        <CodeRunner run='dijkstras(graph, labels);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default Dijkstras;