import React from 'react';
import $ from '../../Math';
import AdjacencyImage from './adjacency.png';

class DijkstrasComplexity extends React.Component {

  render() {
    return (
      <div>
        <p>Different approaches provide different complexities. For a graph with \(e\) edges and \(v\) vertices:</p>
        <p><b>Priority queue</b> (binary heap): Each node is considered exactly once; we extract the minimum node from the priority queue exactly \(v\) times, each time requiring an \(O(\log v)\) operation, for a total of \(O(v \log v)\). When node \(a\) is explored, we consider every adjacent edge. For each edge \((a, b)\) connected to node \(b \not \in S\), we calculate \(\pi(b)\), potentially updating the priority queue, which is an \(O(\log v)\) operation. Overall we do this at most once per edge, for a total of \(O(e \log v)\) operations. Hence the overall complexity is \(O((e + v)\log v)\). Assuming that \(e \ge v\) (a fair assumption for connected graphs, since the minimum number of edges is \(n-1\) and the maximum number of edges is <$ math="\frac{n(n-1)}{2}" />), the complexity is dominated by the number of edges, for a complexity of \(O(e\log v)\).</p>
        <p><b>Node-indexed array</b>: Store the priority of node \(i\) in \(A[i]\). When a node is being "explored", consider all adjacent edges, updating adjacent node priority values, for an overall total of \(O(e)\) operations (each edge is considered once), since indexing the array is an \(O(1)\) operation. Finding the next minimum node is an \(O(n)\) operation, for a total of \(O(n^2 + e)\) operations, which is \(O(n^2)\) overall.</p>
        <h4>Optimal data structure</h4>
        <p><b>Dense graphs</b>: Number of edges is \(\Theta(v^2)\), then the node-indexed array approach is optimal as it will be linear in the number of edges (\(O(n^2) = O(e)\)).</p>
        <p><b>Sparse graphs</b>: Number of edges is \(\Theta(v)\), then the binary-heap priority queue approach is optimal as it will be \(O(v \log v)\).</p>
        <p>More complex data structures exist (e.g. <b>d-way heap</b> or <b>Fibonacci heap</b>) allowing for reduced time complexity.</p>
        <p><b>Adjacency matrices</b> are commonly used to store the graph, with the weight of edge $(u, v)$ stored in $A[u][v]$. This will be symmetrical for an undirected graph.</p>
        <img src={AdjacencyImage} className="img-fluid" alt="An example adjacency matrix" />
      </div>
    );
  }

}

export default DijkstrasComplexity;