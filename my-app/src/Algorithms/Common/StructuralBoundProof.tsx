import React from 'react';
import ProofTechnique from './ProofTechnique';

class StructuralBoundProof extends React.Component {

  render() {
    return (
      <ProofTechnique name="Structural bound">
        <p>Define some structural lower bound where every solution must have at least this value. Show that your algorithm achieves this bound.</p>
      </ProofTechnique>
    );
  }

}

export default StructuralBoundProof;