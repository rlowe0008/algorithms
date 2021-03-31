import React from 'react';
import $ from '../../Math';
import AlgorithmImage from './algorithm.png';
import QueueImage from './queue.png';

class DijkstrasPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Let \(s\) be the start node. Mark all nodes as unvisited, and maintain a set of explored nodes \(S\). A node \(u\) is explored once the algorithm has determined \(d[u]\), the length of the shortest path \(s \rightarrow u \) from source to that node. The initial shortest distance value \(d[u]\) equals \(\infty\) for all unexplored nodes.</p>
        <p>While there exists some unexplored node:</p>
        <ul>
          <li>Choose the next unexplored node \(v\) with the lowest cost \(\pi(v) = d[u] + l_e\), where \(e\) is the cheapest edge \((u,v)\) to reach that node.</li>
          <li>Add \(v\) to \(S\) and set \(d[v] = \pi[v]\). Optionally, store <$ math="\text{prev}(v) = u" />, the node that we leave before reaching \(v\) via this shortest edge.</li>
        </ul>
        <img src={AlgorithmImage} className="img-fluid" alt="The algorithm" />
        <p>A typical approach is to use a <a href="https://en.wikipedia.org/wiki/Priority_queue" rel="noreferrer" target="_blank">priority queue</a> of vertices where the key of edge \(u\) is \(\pi(u)\), which is initially \(\infty\). While the queue is not empty, the minimum vertex \(u\) is extracted and we "explore" it. For each neighbour \(v\), calculate the new minimum distance for $v$: <$ math="\pi'(v) = d[u] + \text{length}(u, v)" />. If this value is less than the current value of \(\pi(v)\) then update \(\pi(v)\) and store the new predecessor node \(u\). This will update the priority queue, and in the next iteration the next node with minimum distance will be selected.</p>
        <img src={QueueImage} className="img-fluid" alt="The algorithm" />
      </div>
    );
  }

}

export default DijkstrasPseudocode;