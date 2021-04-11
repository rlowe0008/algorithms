import React from 'react';
import InfoBubble from '../Algorithms/Common/InfoBubble';
import $ from '../Math';

class Graphs extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{ 'marginTop': '50px' }}>Graphs</h1>

        <h3>Representing graphs</h3>

        <h4>Adjacency matrix</h4>
        <p>An $n \times n$ matrix $A$, where $A[u, v] = 1$ if there exists an edge between $u, v$.</p>
        <ul>
          <li>Space usage: $O(\mid V \mid ^2)$</li>
          <li>Checking if $(u, v) \in E$ is $\Theta(1)$</li>
          <li>Identifying all edges is $\Theta(\mid V \mid ^2)$</li>
        </ul>

        <h4>Adjacency lists</h4>
        <p>Use an array of lists indexed by node, where $A[u]$ is a list of edges incident from $u$.</p>
        <ul>
          <li>Space usage: $\Theta(\mid V \mid + \mid E \mid)$</li>
          <li>Checking if $(u, v) \in E$ is $O(degree(u))$</li>
          <li>Identify all edges is $\Theta(\mid V \mid + \mid E \mid)$</li>
        </ul>

        <h4>Bipartite graphs</h4>
        <p>A graph is <b>bipartite</b> if nodes can be coloured using two colours such that no edge has both ends the same colour. Observations:</p>
        <ol>
          <li>If a graph $G$ is bipartite then it cannot contain an odd-length cycle, as the odd-length cycle cannot be bipartite</li>
          <li>Let $T$ be a tree representing the breadth-first traversal of $G$, where for any edge $(u, v)$, the levels of $u$ and $v$ are at most one layer apart. Then either:
            <ul>
              <li>No edge of $G$ joins two nodes of the same layer, so $G$ is bipartite</li>
              <li>An edge of $G$ joins two nodes of the same layer. $G$ contains an odd-length cycle, so is not bipartite</li>
            </ul>
          </li>
        </ol>
        <p>Then we can check if a graph is bipartite by running BFS and checking the traversal tree.</p>

        <h4>Connectivity</h4>
        <p>A graph is <b>strongly connected</b> if for every pair of node $u, v$, there exists a paths $u \rightarrow v$ and $v \rightarrow u$.</p>
        <p>Theorem: A graph is strongly connected if and only if every node is reachable from some source $s$ and $s$ is reachable from every node.</p>
        <p>Proof:</p>
        <ul>
          <li>$\Rightarrow$: From definition of connectivity</li>
          <li>$\Rightarrow$: For any pair of nodes $u, v$, create a $u \rightarrow v$ path from $u \rightarrow s \rightarrow v$. Create a $v \rightarrow u$ path from $v \rightarrow s \rightarrow u$.</li>
        </ul>
        <p>Determine if a graph is strongly connected in $O(\mid V \mid + \mid E \mid)$ time:</p>
        <ul>
          <li>Pick any node $s$</li>
          <li>Run BFS from $s$. Then reverse the direction of every edge and run BFS again.</li>
          <li>If every vertex is reached both times then the graph is strongly connected.</li>
        </ul>
        <p><b>Strong component</b>: maximal subset of strongly-connected nodes.</p>

        <h4>Topological orderings</h4>
        <p><b>Directed Acyclic Graph</b>: Directed graph with no cycles.</p>
        <p><b>Topoligical ordering</b>: Ordering $v_1, v_2, ..., v_n$ of the vertices of a graph such that for every edge $(v_i, v_j)$, $i \lt j$.</p>
        <p>Theorem: If a graph has a topological order then it is a DAG.</p>
        <p>Proof: Choose any pair of vertices $v_i, v_j$ where a cycle exists between them. Then there must exist some edge from $(v_a, v_b)$ with $i \le a \lt b \le j$. But there must also exist some edge $(v_c, v_d)$ where $j \le c \lt d \le i$. But it cannot hold that $i \lt j$ and $j \lt i$.</p>
        <p>Theorem: If a graph is a DAG then it has a vertex with no incoming edges.</p>
        <p>Proof: Walk back from some vertex until we reach a vertex we have already visited, which must occur otherwise there exists some vertex with no incoming edges. Then there must exist a cycle in the graph, and it is not a DAG.</p>
        <p>Theorem: If a graph is a DAG then it has a topological ordering.</p>
        <p>Proof by induction: TODO</p>
      </div>
    );
  }

}

export default Graphs;