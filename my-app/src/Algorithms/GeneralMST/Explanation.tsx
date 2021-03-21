import React from 'react';
import CyclesCutsets from '../Common/CyclesCutsets';
import MinimumSpanningTree from '../Common/MinimumSpanningTree';

class GeneralMSTExplanation extends React.Component {

  render() {
    return (
      <div>
        <MinimumSpanningTree />
        <CyclesCutsets />
        - Red rule
        - Blue rule
      </div>
    );
  }

}

export default GeneralMSTExplanation;