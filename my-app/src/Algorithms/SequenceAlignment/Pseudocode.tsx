import React from 'react';
import $ from '../../Math';
import ExampleImage from './example.png';

class SequenceAlignmentPseudocode extends React.Component {

  render() {
    return (
      <div>
        <p>Let <$ math="\alpha_{x_iy_j}" /> denote the mis-match penalty between $x_i, y_j$.</p>
        <p>The sub-problem $i, j$ is the optimal alignment between the substrings $X_i, Y_j$ of $X, Y$ up to characters $i$ and $j$ respectively. Hence let $OPT(i, j)$ denote the cost of the optimal alignment for substrings $X_i, Y_j$ up to characters $i$ and $j$, respectively.</p>
        <p>The optimal alignments for the sub-problem $i,j$ ends with either:</p>
        <ul>
          <li>The last characters of $X,Y$ are aligned (with potential mis-match):
            <br /><$ math="OPT(i,j)= \alpha_{x_iy_j}+OPT(i-1,j-1)" />
          </li>
          <li>The last character of $X$ is aligned with a gap in $Y$
            <br /><$ math="OPT(i,j) = \delta + OPT(i-1, j)" />
          </li>
          <li>
            The last character of $Y$ is aligned with a gap in $X$
            <br />$OPT(i,j) = \delta + OPT(i, j-1)$
          </li>
        </ul>
        <p>The remainder of the alignment is optimal.</p>
        <p><b>Bellman equation</b>: $OPT(i, j) =$</p>
        <ul>
          <li>$j \delta$, if $i = 0$ (gap penalty)</li>
          <li>$i \delta$, if $j = 0$ (gap penalty)</li>
          <li><$ math="\min(a_{x_iy_j} + OPT(i - 1, j - 1), \delta + OPT(i - 1, j), \delta + OPT(i, j-1) )" /></li>
        </ul>
        <p><b>Memoization</b>: An $m \times n$ matrix $M$ storing the result of $OPT(i,j)$.</p>
        <p><b>Algorithm</b>: For two strings of length $m,n$:</p>
        <ul>
          <li>For $i=0$ to $m$
            <ul>
              <li>Set $M[i, 0]=i\delta$</li>
            </ul>
          </li>
          <li>For $j=0$ to $n$
            <ul>
              <li>Set $M[0, j] = j \delta$</li>
            </ul>
          </li>
          <li>For $i=1$ to $m$
            <ul>
              <li>For $j=1$ to $n$
                <ul>
                  <li><$ math="M[i,j]=\min(\alpha_{x_iy_i} + M[i-1, j-1], \delta + M[i-1, j], \delta + M[i, j-1])" /></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Return $M[m,n]$</li>
        </ul>
        <img src={ExampleImage} className="img-fluid" alt="Example input and output" />
      </div>
    );
  }

}

export default SequenceAlignmentPseudocode;