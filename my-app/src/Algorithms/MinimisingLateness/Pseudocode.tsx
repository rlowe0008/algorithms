import React from 'react';

class MinimisingLatenessPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ol>
          <li>Sort jobs by due times such that \(d_1 \le d_2 \le ... \le d_n\)</li>
          <li>Set \(t = 0\)</li>
          <li>For jobs from \(1\) to \(n\):</li>
          <ol>
            <li>Assign job \(j\) to interval \([t, t + t_j]\): Set \(s_j = t\), \(f_j = t + t_j\)</li>
            <li>Set \(t = t_j \)</li>
          </ol>
        </ol>
      </div>
    );
  }

}

export default MinimisingLatenessPseudocode;