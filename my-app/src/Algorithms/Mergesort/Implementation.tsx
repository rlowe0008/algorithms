import React from 'react';
import CodeRunner from '../../CodeRunner';

class Mergesort extends React.Component {

  render() {

    const code = `
const array = [4, 8, 3, 7, 9, 1, 5, 2];

function mergesort(array) {
  if (array.length <= 1) return array;

  // Split array in half
  let A = array.slice(0, Math.floor(array.length / 2));
  let B = array.slice(Math.floor(array.length / 2), array.length);
  
  // Sort both halves
  A = mergesort(A);
  B = mergesort(B);

  // Recombine
  let C = [];
  let i = 0;
  let j = 0;
  while ((i < A.length) && (j < B.length)) {
    if (A[i] <= B[j]) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }

  // Push remainders to list
  for (let x = i; x < A.length; x++) C.push(A[x]);
  for (let x = j; x < B.length; x++) C.push(B[x]);

  return C;
}
    `;

    return (
      <div>
        <CodeRunner run='mergesort(array);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default Mergesort;