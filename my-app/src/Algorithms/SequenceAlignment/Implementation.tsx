import React from 'react';
import CodeRunner from '../../CodeRunner';

class SequenceAlignment extends React.Component {

  render() {

    const code = `
const X = 'AGTCG';
const Y = 'ATTC';

function alpha(char1, char2, a) {
  if (char1 === char2) return 0;
  else return a;
}

function sequenceAlignment(X, Y, d, a) {
  // Create an empty m x n matrix
  let M = [];
  for (let i = 0; i <= X.length; i++) {
    let row = [];
    for (let j = 0; j <= Y.length; j++) {
      row.push(0);
    }
    M.push(row);
  }

  // Set M[i, 0] = i x delta
  for (let i = 0; i <= X.length; i++) {
    M[i][0] = i * d;
  }
  // Set M[0, j] = j x delta
  for (let j = 0; j <= Y.length; j++) {
    M[0][j] = j * d;
  }
  // Main loop
  for (let i = 1; i <= X.length; i++) {
    for (let j = 1; j <= Y.length; j++) {
      M[i][j] = Math.min(
        alpha(X[i - 1], Y[j - 1], a) + M[i - 1][j - 1],
        d + M[i - 1][j],
        d + M[i][j - 1]
      );
    }
  }
  console.log(M);
  return M[X.length][Y.length];
}
    `;

    return (
      <div>
        <CodeRunner run='sequenceAlignment(X, Y, 1, 1);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default SequenceAlignment;