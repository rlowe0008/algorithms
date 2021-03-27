import React from 'react';
import $ from '../../Math';

class ClosestPointsExplanation extends React.Component {

  render() {
    return (
      <div>
        <p>Given $n$ points in a 2D space (plane), find a pair of points with the smallest Euclidean distance between them: <$ math="\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}" large /></p>
        <p>Uses: A number of algorithms are based on closest pair of points, including dynamic minimum spanning trees (updating an MST after an edge weight is changed) and collision detection.</p>
        <ul>
          <li>Brute force: check all pairs, requiring $\Theta(n^2)$ calculations</li>
          <li>1D version: If all points are on a single line then this is a simple $O(n \log n)$ algorithm</li>
        </ul>
        <p>Naive approach: Divide the space by drawing a vertical line $L$ such that $n/2$ points are on each side, then find the closest pair in each side recursively. To combine: find the closest pair with one point in each side, and return the best of the three solutions. Problem: The combination step is a $\Theta(n^2)$ operation, so we must reduce the complexity of this step.</p>
        <p>Solution: Say we have found the shortest distance $\delta_1$ between pairs in the left side, and the shortest distance $\delta_2$ between pairs in the right side. Then if the shortest distance between points on either side of $L$ is greater than the smallest of $\delta_1,\delta_2$ then it cannot be the shortest pair at this stage and would not be a candidate. Hence, we need only consider points within $\delta = \min(\delta_1, \delta_2)$ of $L$.</p>
      </div>
    );
  }

}

export default ClosestPointsExplanation;