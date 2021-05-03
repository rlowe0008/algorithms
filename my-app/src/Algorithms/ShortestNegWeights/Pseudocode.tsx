import React from 'react';
import $ from '../../Math';
import InfoBubble from '../Common/InfoBubble';
import AlgorithmImage from './algorithm.png';

class ShortestNegWeightsPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p><b>Bellman equation</b>: $OPT(i,v)=$</p>
        <ul>
          <li>$0$, if $i=0$ and $v=t$</li>
          <li>$\infty$, if $i=0$ and $v\ne t$</li>
          <li><$ math="\min\{OPT(i−1,v),\min_{(v,w)\in E}​\{OPT(i−1,w)+l_{vw​}\}\}" /> if $i \gt 0$</li>
        </ul>
        <p><b>Memoization</b>: Store in $M[i,v]$ the length of the shortest $v \rightarrow t$ path with $\le i$ edges.</p>
        <p><b>Algorithm</b>:</p>
        <ul>
          <li>For each node $v \in V$ set $M[0, v] = \infty$</li>
          <li>$M[0,t] = 0$</li>
          <li>For $i=1$ to $\mid E \mid -1$:
            <ul>
              <li>Foreach node $v \in V$:
                <ul>
                  <li>$M[i,v]=M[i-1,v]$</li>
                  <li>Foreach edge $(v,w)\in E$:
                    <ul>
                      <li><$ math="M[i,v] = \min(M[i,v], M[i-1, w] + l_{vw})" /></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <InfoBubble title="Example">
          <img src={AlgorithmImage} className="img-fluid" alt="Example" />
        </InfoBubble>
        <h4>Finding shortest paths</h4>
        <p>To return the shortest paths, either:</p>
        <ol>
          <li>Maintain <code>successor[i,v]</code>, pointing to the next node on a shortest $v \rightarrow t$ path using $\le i$ edges, or</li>
          <li>Compute optimal lengths $M[i,v]$ and consider only edges with <$ math="M[i,v]=M[i-1, w] + l_{vw}" />. Any directed path in this subgraph is a shortest path.</li>
        </ol>
        <h4>Improvements</h4>
        <ul>
          <li>Space, maintain two 1-D arrays instead</li>
          <li>Performance, do not consider edges entering nodes that aren't updated</li>
          <li>We implement these in the Bellman-Ford-Moore algorithm</li>
        </ul>
      </div>
    );
  }

}

export default ShortestNegWeightsPseudocode;