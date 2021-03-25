import React from 'react';
import LoopInvariantProof from '../Common/LoopInvariant';

class MergesortProof extends React.Component {

  render() {
    return (
      <div>
        <LoopInvariantProof />
        <p>Define loop invariant: at the start of each iteration $k$ of the loop, the non-empty part of $C$ contains the $k-1$ smallest elements of $A$ and $B$ in sorted order. Furthermore, $A[i]$ and $B[j]$ are the smallest elements of their arrays that have not been copied to $C$.</p>
        <p>Initialisation: Before the first iteration of the loop, $i=j=1$ and $C$ is empty. $A[1]$ is the smallest element of $A$ and $B[1]$ is the smallest element of $B$. So the invariant holds.</p>
        <p>Maintenance: Suppose, without loss of generality, that $A[i]\le B[i]$. Then $A[i]$ is the smallest element not yet copied to $C$. The non-empty part of $C$ currently consists of the $k-1$ smallest elements. After the loop, $A[i]$ is copied to $C$ and the non-empty part of $C$ consists of the $k$ smallest elements. $k$ and $i$ are incremented, re-establishing the loop invariant for the next iteration.</p>
        <p>Termination: Let $m = \mid A \mid + \mid B \mid$. At termination, $k =  m+ 1$. By the loop invariant, $C$ contains the $m$ smallest elements of $A$ and $B$, in sorted order. $C$ is the result of merging two sorted lists $A, B$ to produce a new, sorted list, which was the result we wanted.</p>
      </div>
    );
  }

}

export default MergesortProof;