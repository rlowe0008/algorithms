import React from 'react';
import BlueRule from '../Common/BlueRule';
import CyclesCutsets from '../Common/CyclesCutsets';
import MinimumSpanningTree from '../Common/MinimumSpanningTree';
import RedRule from '../Common/RedRule';

class GeneralMSTExplanation extends React.Component {

  render() {
    return (
      <div>
        <MinimumSpanningTree />
        <CyclesCutsets />
        <RedRule />
        <BlueRule />
      </div>
    );
  }

}

export default GeneralMSTExplanation;