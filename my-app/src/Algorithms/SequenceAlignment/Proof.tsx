import React from 'react';
import OptimalSubstructProof from '../Common/OptimalSubstructure';

class SequenceAlignmentProof extends React.Component {

  render() {
    return (
      <div>
        <OptimalSubstructProof />
        <p>At the final character, either:</p>
        <ul>
          <li>Characters are aligned, so incur the cost of any mismatch and the cost of the remaining string up to the current character</li>
          <li>Characters are mis-aligned, incur the cost of a gap and either
            <ul>
              <li>Incur the cost of the remaining string with $X$ shifted, or</li>
              <li>Incur the cost of the remaining string with $Y$ shifted</li>
            </ul>
          </li>
        </ul>
        <p>We choose whichever option is cheapest, and hence at the final character will incur the lowest penalty over the whole string.</p>
      </div>
    );
  }

}

export default SequenceAlignmentProof;