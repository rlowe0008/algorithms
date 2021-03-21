import React from 'react';
import $ from '../../Math';
import LoopInvariantProof from '../Common/LoopInvariant';

class GeneralMSTProof extends React.Component {

  render() {
    return (
      <div>
        <LoopInvariantProof />
        <p><b>Colour invariant</b>: There always exists some MST $(V, T^*)$ containing every blue edge and no red edge.</p>
        <p>Proof by induction.</p>
        <p>Base case: no edges coloured, so every MST vacuously satisfies the invariant.</p>
        <p>Inductive step: suppose that the colour invariant rule is true before we apply the 🔵 blue rule. Let $D$ be the chosen cutset, and let $f \in D$ be some edge we will colour blue:</p>
        <ul>
          <li>If $f \in T^*$, then $T^*$ still contains every blue edge, and since it is the minimum edge then it is still an MST, so the colour invariant holds.</li>
          <li>If $f \not\in T^*$, then let $C$ be the fundamental cycle formed by adding $f$ to $T^*$. Let $e \in C$ be another edge in $D$, which must exist since the intersection of every cutset and a cycle has an even number of edges.</li>
          <ul>
            <li>$e$ is uncoloured, since</li>
            <ul>
              <li>$e\in T^* \implies f$ is not red</li>
              <li>We are applying the blue rule, so $e$ cannot be blue</li>
            </ul>
            <li>$c_e \ge c_f$, since we selected $f \in D$ not $e \in D$ when applying the blue rule</li>
          </ul>
          <li>Hence <$ math="T^* \cup \{f\} - \{e\}" /> satisfies the invariant</li>
        </ul>

        <p>Secondly, suppose that the colour invariant rule is true before we apply the 🔴 red rule. Let $C$ be the chosen cycle, and let $e \in C$ be some edge we will colour red:</p>
        <ul>
          <li>If $e \not\in T^*$, then the colour invariant holds.</li>
          <li>If $e \in T^*$, then let $D$ be the fundamental cutset formed by deleting $e$ from $T^*$. Let $f \in D$ be another edge in $C$, which must exist since the intersection of every cutset and a cycle has an even number of edges.</li>
          <ul>
            <li>$f$ is uncoloured, since</li>
            <ul>
              <li>$f\not\in T^* \implies f$ is not blue</li>
              <li>We are applying the red rule, so $f$ cannot be red</li>
            </ul>
            <li>$c_e \ge c_f$, since $e$ was selecting when applying the red rule</li>
          </ul>
          <li>Hence <$ math="T^* \cup \{f\} - \{e\}" /> satisfies the invariant</li>
        </ul>

        <p>Finally, we must prove that the greedy algorithm terminates and that the blue edges form an MST.</p>
        <p>Suppose there is some edge $e$ that is currently uncoloured. At any time, the blue edges form a forest (a collection of possibly disconnected trees), since the blue rule requires us to select a cutset with no clue edges. Now either $e$ can be coloured blue or red.</p>
        <p>Suppose there is some edge $e$ that is currently uncoloured. At any time, the blue edges form a forest (a collection of possibly disconnected trees), since the blue rule requires us to select a cutset with no clue edges. Now either $e$ can be coloured blue or red.</p>
        <p>Case 2: both endpoints of $e$ are in different blue trees. We apply the blue rule to the cutset induced by either of the two blue trees, picking the cheapest edge and colouring it blue.</p>
        <p>This repeats until all edges are coloured, so the algorithm terminates, and by the proof above these blue edges form an MST.</p>
      </div>
    );
  }

}

export default GeneralMSTProof;