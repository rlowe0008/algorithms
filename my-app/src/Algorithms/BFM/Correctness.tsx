import React from 'react';
import $ from '../../Math';

class BFMCorrectness extends React.Component {

  render() {
    return (
      <div>
        <p>Lemma: For each node $v: d[v]$ is the length of some $v \rightarrow t$ path. $d[v]$ is monotone and non-increasing.</p>
        <p>Lemma: After pass $i$, $d[v] \le$ length of a shortest $v \rightarrow t$ path using $\le i$ edges.</p>
        <p>Proof: by induction on $i$.</p>
        <ul>
          <li>Base case: $i=0$</li>
          <li>Assume true after pass $i$</li>
          <li>Let $P$ be any $v \rightarrow t$ path with $\le i + 1$ edges</li>
          <li>Let $(v,w)$ be the first edge in $P$ and let $P'$ by the subpath from $w$ to $t$</li>
          <li>By inductive hypothesis, at the end of pass $i$, $d[w] \le c(P')$ (and by our previous lemma $d[w]$ does not increase), because $P'$ is a $w \rightarrow t$ path with $\le i$ edges</li>
          <li>After considering edge $(v,w)$ in pass $i+1$:
            <ul>
              <li>
                <$ math="d[v] \le l_{vw} + d[w]" /><br />
                <$ math="\le l_{vw} + c(P')" /><br />
                <$ math="= l(P)" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

}

export default BFMCorrectness;