import React from 'react';
import $ from '../../Math';
import ExchangeProof from '../Common/ExchangeProof';

class KruskalsProof extends React.Component {

  render() {
    return (
      <div>
        <ExchangeProof />
        <p>Let $T=(V,F)$ be the spanning tree produced by the algorithm and let $T* = (V, F*)$ be a minimum spanning tree. If $T$ is not optimal then $F \ne F*$, and there is an edge $e \in F*$ such that $e \notin F$.</p>
        <p>In the graph $T + e$, $e$ creates a cycle $C$ and at least one edge $f\in T$ of this cycle crosses the cut defined by $T*-e$. Since $e$ is not in $F$, then when $e$ was considered by the algorithm, the rest of $C$ must already be in the tree. Since edges are considered in increasing order of cost, it must be that $c_f \le c_e$. If we add $f$ to <$ math="T*-\{e\}" /> then we reconnect the graph and create a spanning tree, with no more cost than $T*$ but with one more edge in common with $T$. We can do this for every differing edge, so after $n-1$ steps we obtain the tree $T$ of no more cost than $T*$. This contradicts the assumption that $T$ was not optimal.</p>

        <h4>Reverse-delete algorithm</h4>
        <p>This algorithm takes an approach that is essentially the opposite of Kruskal's algorithm.</p>
        <ul>
          <li>Kruskal's: look at edges in <i>increasing</i> order of cost and store them in $T$ only if they do not create a cycle</li>
          <li>Reverse-delete: look at edges in <i>decreasing</i> order of cost and remove them from $T$ unless they would disconnect $T$</li>
        </ul>
        <p>The appropriateness of both comes from the definition of a spanning tree, which is both <i>minimally connected</i> and <i>maximally acyclic</i>.</p>
        <p>Consider some edge $e$:</p>
        <ul>
          <li>Deleting edge $e$ does not disconnect $T$. Then $e$ would be "coloured red" by the red rule, by applying the red rule to the cycle $C$ formed by adding $e$ to another path in $T$ between its two endpoints. No edge in $C$ is more expensive, or it would have already been considered and deleted.</li>
          <li>Deleting edge $e$ disconnects $T$. Then $e$ would be "coloured blue" by the blue rule, by applying the blue rule to the cutset $D$ induced by either component when $e$ disconnects $T$. Edge $e$ will be the only remaining edge in the cutset, since all other edges in $D$ must have been coloured red / deleted.</li>
        </ul>
        <p><b>Complexity</b>: Thorup (2000) gives an implementation of $O(E \log V(\log \log V)^3)$.</p>
        <p><b>Proof of correctness</b>: exchange argument.</p>
      </div>
    );
  }

}

export default KruskalsProof;