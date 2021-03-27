import React from 'react';
import RecursiveInvariant from '../Common/RecursiveInvariant';
import $ from '../../Math';

class ClosestPointsProof extends React.Component {

  render() {
    return (
      <div>
        <RecursiveInvariant />
        <p>Define the recursive invariant: At each call, <code>closest pair(set of points)</code> returns the distance of the closest pair of points in the set.</p>
        <p>Base: there are only 2 points, and we return the distance between them.</p>
        <p>Maintenance: $\delta_1, \delta_2$ are the closest distances in $L, R$ respectively, by the invariant. Then $\delta$ is a bound by which any closer pair of points must be closer than. For all points within $\delta$ of the midpoint (if they are beyond $\delta$ then their distance to a point beyond the midpoint is <$ math=">\delta" />), we consider all potential nearest points, and if any are nearer than $\delta$, update $\delta$. Then $\delta$ is still an upper bound on the distance for the closest pair of points. Once all points in the set have been considered, then $\delta$ is the distance of the closest pair of points in the set. So the invariant holds.</p>
        <p>Termination: we return $\delta$ for the entire problem, the whole set of points.</p>
      </div>
    );
  }

}

export default ClosestPointsProof;