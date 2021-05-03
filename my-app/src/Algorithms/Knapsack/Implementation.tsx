import React from 'react';
import CodeRunner from '../../CodeRunner';

class Knapsack extends React.Component {

  render() {

    const code = `
const items = [
  { value: 4, weight: 12 },
  { value: 2, weight: 2 },
  { value: 2, weight: 1 },
  { value: 1, weight: 1 },
  { value: 10, weight: 4 }
];

function knapsack(items, W) {
  let M = [];
  // Build the (n + 1) x (W + 1) array
  for (let i = 0; i <= items.length; i++) {
    let row = [];
    for (let j = 0; j <= W; j++) {
      row.push(0);
    }
    M.push(row);
  }
  // For each item...
  for (let i = 0; i < items.length; i++) {
    let ix = i + 1;
    // For w from 0 to W...
    for (let w = 0; w <= W; w++) {
      if (items[i].weight > w) {
        M[ix][w] = M[ix - 1][w];
      } else {
        M[ix][w] = Math.max(M[ix - 1][w], items[i].value + M[ix - 1][w - items[i].weight]);
      }
    }
  }
  console.log(M);

  // Find the set that produces max value
  let solution = [];
  let weight = W;
  for (let ix = items.length; ix > 0; ix--) {
    if (M[ix][weight] > M[ix - 1][weight]) {
      // Include item
      solution.push(items[ix - 1]);
      weight = weight - items[ix - 1].weight;
    }
  }

  return { value: M[items.length][W], items: solution };
}
    `;

    return (
      <div>
        <CodeRunner run='knapsack(items, 15);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default Knapsack;