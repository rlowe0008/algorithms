import React from 'react';

class KnapsackExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>We have $n$ items, where each item $i$ has a value $v_i \gt 0$ and weight $w_i \gt 0$. We have a knapsack with a weight limit $W$ that we want to pack with the maximum possible value of items without exceeding $W$.</p>
        <p>Example:</p>
        <ul>
          <li>Input:
            <ul>
              <li>Items: [ £4, 12g ], [ £2, 2g ], [ £2, 1g ], [ £1, 1g ], [ £10, 4g ]</li>
              <li>Weight limit: 15g</li>
            </ul>
          </li>
          <li>Output: £15 ( [ £2, 2g ], [ £2, 1g ], [ £1, 1g ], [ £10, 4g ] )</li>
        </ul>
      </div>
    );
  }

}

export default KnapsackExplanation;