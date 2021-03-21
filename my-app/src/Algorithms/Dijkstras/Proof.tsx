import React from 'react';
import $ from '../../Math';
import LoopInvariantProof from '../Common/LoopInvariant';
import NegativeImage from './negative-edges.png';

class DijkstrasProof extends React.Component {

  render() {
    return (
      <div>
        <LoopInvariantProof />
        <p>We prove that, after every iteration, the following invariant holds: for each node \(u \in S: d[u] =\) length of a shortest \(s \rightarrow u\) path, with S being the set of explored vertices.</p>
        <p>Proof: by induction on the size of S, assuming no edge has negative weights.</p>
        <p>Base case: <$ math="\mid S \mid = 1, S = \{s \}, d[s] = 0" /></p>
        <p>Inductive hypothesis: assume the invariant is true for all \(\mid S \mid \ge 1\). Let v be the next node added to S, with \((u,v)\) as the latest edge explored. The shortest \(s\rightarrow v\) path must be the shortest path \(s \rightarrow u\) plus the edge \((u, v)\), with length \(\pi(v)\).</p>
        <p>Consider any other \(s \rightarrow v\) path P. It must be no shorter than \(\pi(v)\):</p>
        <ul>
          <li>Let \(e = (x, y)\) be the first edge in P that leaves the explored set S, i.e. y has not been explored yet, and let \(P'\) be the subpath from s to x.</li>
          <li>The length of $P$, $l(P)$, is already $\ge \pi(v)$ as soon as the path reaches $y$, since: $$l(P) \ge l(P') + l_e \ge d[x] + l_e \ge \pi(y) \ge \pi(v)$$</li>
          <ul>
            <li>$l(P) \ge l(P') + l_e$, since we assume that $e$ cannot have a negative length, i.e. a path must grow as we extend it</li>
            <li>$l(P') + l_e \ge d[x] + l_e$, since $l(P')$ simply denotes the length of path $P'$ from $s \rightarrow x$</li>
            <li>$d[x] + l_e \ge \pi(y)$, by the definition of $\pi(y)$</li>
            <li>$\pi(y) \ge \pi(v)$, since we explore nodes by lowest $\pi$ value and we explored $v$ before $y$</li>
          </ul>
        </ul>
        <h4>Negative edges</h4>
        <p>Note the key assumption for this proof - that paths grow over time. In other words, once we have explored some node $v$, we have found the shortest path to it, and we need not explore the node again. However, with negative edges, there may exist some path that is initially more expensive, but becomes cheaper the further down we go due to a negative edge. Since Dijkstra's is greedy, it will fail to explore this path. In other words, the algorithm believes that the cost to all nodes in $S$ is minimal and thus the next node selected will be minimal.</p>
        <img src={NegativeImage} className="img-fluid" alt="A negative edges example" />
      </div>
    );
  }

}

export default DijkstrasProof;