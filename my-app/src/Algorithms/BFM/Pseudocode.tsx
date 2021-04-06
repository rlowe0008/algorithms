import React from 'react';
import $ from '../../Math';

class BFMPseudocode extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Foreach node $v \in V$:
            <ul>
              <li>$d[v] = \infty$</li>
              <li><code>successor[v] = null</code></li>
            </ul>
          </li>
          <li>$d[t] = 0$</li>
          <li>For $i=1$ to $\mid E \mid -1$:
            <ul>
              <li>Foreach node $w \in V$:
                <ul>
                  <li>If $d[w]$ updated in previous pass:
                    <ul>
                      <li>Foreach edge $(v,w)\in E$:
                        <ul>
                          <li>If <$ math="d[v] > d[w]+l_{vw}" />:
                            <ul>
                              <li><$ math="d[v]=d[w]+l_{vw}" /></li>
                              <li><code>successor[v]</code> = $w$</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>If no value changed in pass, stop</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

}

export default BFMPseudocode;