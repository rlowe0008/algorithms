import React from 'react';
import EditDistanceImage from './edit-distance.png';

class SequenceAlignmentExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>We have two strings $X,Y$, with lengths $m, n$ respectively. There exists some alignment between the two strings such that the character-by-character penalty is minimised:</p>
        <ul>
          <li>Gap penalty $\delta$: occurs when we insert a gap into one of the strings</li>
          <li>Character mis-match penalty $\alpha$: occurs when two characters are not equal</li>
        </ul>
        <p>Total penalty / Needleman-Wunsch score: total gap penalty + total character mis-match penalty.</p>
        <img src={EditDistanceImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default SequenceAlignmentExplanation;