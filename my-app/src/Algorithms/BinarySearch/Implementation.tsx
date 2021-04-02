import React from 'react';
import CodeRunner from '../../CodeRunner';

class BinarySearch extends React.Component {

  render() {

    const code = `
const array = [1, 3, 6, 7, 9, 13, 17, 21, 24];

function binarySearch(A, T) {
  let l = 0;
  let r = A.length - 1;
  let m = 0;
  while (true) {
    m = Math.floor((l + r) / 2);
    
    if (A[m] === T) return m;

    // Catch if not in list
    if (l === r) return -1;

    if (A[m] < T) l = m + 1;
    else if (A[m] > T) r = m - 1;
  }
}
    `;

    return (
      <div>
        <CodeRunner run='binarySearch(array, 13);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default BinarySearch;