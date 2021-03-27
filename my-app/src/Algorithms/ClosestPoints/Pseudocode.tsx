import React from 'react';
import InfoBubble from '../Common/InfoBubble';
import AlgorithmImage from './algorithm.png';
import PointsImage from './7-points.png';

class ClosestPointsPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Define <code>closest pair:</code></p>
        <ol>
          <li>Sort points by x-coordinate</li>
          <li>Compute a vertical line $L$ such that half the points are on each side of the line</li>
          <li>Let $\delta_1 =$ <code>closest pair(left side)</code></li>
          <li>Let $\delta_2 =$ <code>closest pair(right side)</code></li>
          <li>$\delta = \min(\delta_1, \delta_2)$</li>
          <li>Ignore all points further than $\delta$ from line $L$</li>
          <li>Sort remaining points by y-coordinate</li>
          <li>Scan points in y-order and compare distance between each point and next 7 neighbours. If any of these distances is less than $\delta$, update $\delta$</li>
          <li>Return $\delta$</li>
        </ol>

        <InfoBubble title="Why consider 7 neighbours?">
          <p>Consider the $2\delta \times \delta$ rectangle within which some point $p$ and all neighbours we could consider reside. Within this there are two $\delta \times \delta$ squares, one to the left of $M$ and one to the right. In either side, no point can be closer than $\delta$ to any other point, so there are at most 4 points in any $\delta \times \delta$ square, and therefore at most 7 possible neighbours for $p$ within the $2\delta \times \delta$ rectangle.</p>
          <img src={PointsImage} className="img-fluid" alt="Consider 7 neighbours when updating d" />
        </InfoBubble>

        <img src={AlgorithmImage} className="img-fluid" alt="Closest pair of points algorithm" />

        <p>Improvement: do not sort points in the strip from scratch each time; make the recursive call return points sorted by x-coordinate and points sorted by y-coordinate, and sort by merging these two lists.</p>
      </div>
    );
  }

}

export default ClosestPointsPseudocode;