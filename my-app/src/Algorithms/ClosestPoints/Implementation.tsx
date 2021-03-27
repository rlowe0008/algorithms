import React from 'react';
import CodeRunner from '../../CodeRunner';

class ClosestPoints extends React.Component {

  render() {

    const code = `
const points = [
  { x: 1, y: 8 },
  { x: 8, y: 9 },
  { x: 6, y: 7 },
  { x: 2, y: 5 },
  { x: 7, y: 4 },
  { x: 4, y: 1 }
];

function euclideanDistance(p1, p2) {
  return Math.sqrt( Math.pow(( p1.x - p2.x ), 2) +  Math.pow(( p1.y - p2.y ), 2) );
}

// Implementation does NOT use linear-time merge
function closestPoints(points) {
  // Base cases
  if (points.length === 1) return Infinity;
  if (points.length === 2) return euclideanDistance(points[0], points[1]);
  // Sort by x-coordinate
  const pointsSorted = points.sort((p1, p2) => p1.x - p2.x);

  // Find the midpoint
  const midpointIndex = Math.floor(pointsSorted.length / 2);
  const L = Math.floor((pointsSorted[midpointIndex].x + pointsSorted[midpointIndex + 1].x) / 2);

  // Split
  const left = pointsSorted.slice(0, midpointIndex);
  const right = pointsSorted.slice(midpointIndex, pointsSorted.length);

  // Find closest pair in both halves
  const d1 = closestPoints(left);
  const d2 = closestPoints(right);
  let d = Math.min(d1, d2);

  // Find points within d of L
  const leftPoints = left.filter((p) => p.x >= (L - d));
  const rightPoints = right.filter((p) => p.x <= (L + d));
  let newPoints = leftPoints.concat(rightPoints);

  // Sort these points by y-coordinate
  newPoints = newPoints.sort((p1, p2) => p1.y - p2.y);

  // Scan points in this order, checking distances with at most the next 7 neighbours
  for (let i = 0; i < newPoints.length; i++) {
    const neighbours = newPoints.slice(i + 1, Math.max(i + 7, newPoints.length));
    console.log(newPoints[i], neighbours);
    for (let j = 0; j < neighbours.length; j++) {
      if (euclideanDistance(newPoints[i], neighbours[j]) < d) {
        d = euclideanDistance(newPoints[i], neighbours[j]);
      }
    }
  }
  return d;
}
    `;

    return (
      <div>
        <CodeRunner run='closestPoints(points);'>
          { code }
        </CodeRunner>
      </div>
    );
  }

}

export default ClosestPoints;