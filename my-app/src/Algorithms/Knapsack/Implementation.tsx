import React from 'react';
import CodeRunner from '../../CodeRunner';

class Knapsack extends React.Component {

  render() {

    const code = `

    `;

    return (
      <div>
        <CodeRunner run='weightedIntervalScheduling(jobs);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default Knapsack;