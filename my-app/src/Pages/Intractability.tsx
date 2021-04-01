import React from 'react';
import Oracle from './oracle.png';
import IndependentSetImage from './independent-set.png';
import VertexCoverImage from './vertex-cover.png';
import VIReduction from './vertex-cover-independent-set.png';
import VSReduction from './set-cover-vertex-cover.png';
import FindVertexCover from './find-vertex-cover.png';
import FindVertexCover2 from './find-vertex-cover-2.png';
import IS3Sat from './ind-set-3sat.png';
import IS3Sat2 from './ind-set-3sat-2.png';
import SSReduction from './subset-sum-reduction.png';
import SS1 from './subset-sum-eg1.png';
import $ from '../Math';
import InfoBubble from '../Algorithms/Common/InfoBubble';

class Intractability extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{ 'marginTop': '50px' }}>Intractability</h1>
        <p><b>Polynomial-time algorithms</b>: algorithms that can be solved in polynomial time.</p>
        <p>Problems we can solve "in practice" are polynomial-time algorithms. The definition of a polynomial-time algorithm holds for many different computational models (Turing machines, word RAM, etc...)</p>
        <p>In practice, polynomial time algorithms scale well with huge input sizes. Where complexity is $a \times n^c$, $a$ and $c$ are typically fairly small constants.</p>
        <p>Some problems cannot be solved in polynomial time and require exponential time.</p>
        <p>Example: generalised checkers with an $n \times n$ board. Given a board position, can either player guarantee a win? This requires exponential time to solve.</p>
        <p>Example: given a program, does it halt in at most $k$ steps (halting problem)? This requires exponential time to solve.</p>
        <p>Many problems have not been proven to require an exponential-time algorithm, but also have no known polynomial-time solution.</p>

        <h3>Reductions</h3>
        <p><b>Oracle</b>: an oracle for problem $Y$ is a computational model that solves instances of $Y$ in a single step.</p>
        <p>Suppose we can solve problem $Y$ in polynomial time. Then some other problem $X$ <b>polynomial-time reduces</b> to $Y$ if arbtirary instances of $X$ can be solved using:</p>
        <ol>
          <li>Polynomially-many computational steps, and</li>
          <li>Polynomially-many calls to the oracle that solves problem $Y$ (each instance solved by the oracle must be of polynomial size).</li>
        </ol>
        <img src={Oracle} className="img-fluid" alt="Reductions" />
        <p>If $X$ polynomial-time reduces to $Y$ then:</p>
        <ul>
          <li>$Y$ can be solved in polynomial time $\implies X$ can be solved in polynomial time (if $Y$ is easy then $X$ is easy - allows us to design an algorithm for $X$)</li>
          <li>$X$ cannot be solved in polynomial time $\implies Y$ cannot be solved in polynomial time (if $X$ is not easy then $Y$ is not easy - establishes intractability of $Y$)</li>
        </ul>
        <p>$X$ polynomial-time reduces to $Y$ is denoted by: $X \le_P Y$.</p>
        <p>Problem $Y$ is <b>harder than</b> problem $X$.</p>
        <p>If $X \le_P Y \land Y \le_P X$ then $X \equiv_P Y$.</p>
        <p>Reductions allow us to classify problems according to their relative difficulty.</p>

        <h4>Transitivity</h4>
        $$A \le_P B \land B \le_P C \Rightarrow A \le_P C$$

        <h3>Independent set and vertex cover</h3>
        
        <InfoBubble title="Independent set problem">
          <p>Given a graph $G=(V,E)$ and integer $k$, is there a subset of $k$ or more vertices such that no two are adjacent? Output YES or NO.</p>
          <img src={IndependentSetImage} className="img-fluid" alt="Independent set example" />
          <p>This is an example of a <b>packing problem</b>.</p>
        </InfoBubble>

        <InfoBubble title="Vertex cover problem">
          <p>Given a graph $G=(V,E)$ and integer $k$, is there a subset of $k$ (or fewer) vertices such that each edge is incident to at least one vertex in the subset? Output YES or NO.</p>
          <img src={VertexCoverImage} className="img-fluid" alt="Vertex cover example" />
          <p>This is an example of a <b>cover problem</b>.</p>
        </InfoBubble>

        <p>Theorem: Independent set problem $\equiv_P$ vertex cover problem.</p>
        <p>Proof: $S$ is an independent set of size $k$ if and only if $V-S$ is a vertex cover of size $k-n$ for a graph with $n$ vertices.</p>
        
        <InfoBubble title="Proof">
          <p>$\Rightarrow$:</p>
          <ul>
            <li>Let $S$ be some independent set of size $k$</li>
            <li>$V-S$ has size $n-k$</li>
            <li>Consider some edge $(u, v) \in E$</li>
            <li>$S$ independent $\Rightarrow$ either $u \not\in S$ or $v \not\in S$ or both $\Rightarrow$ either $u \in V-S$ or $v \in V-S$ or both</li>
            <li>Therefore for any edge in $E$, at least one incident vertex must be in $V-S$, so $V-S$ covers $G$</li>
          </ul>

          <p>$\Leftarrow$:</p>
          <ul>
            <li>Let $V-S$ be some vertex cover set of size $n-k$</li>
            <li>$S$ has size $k$</li>
            <li>Consider some edge $(u,v) \in E$</li>
            <li>$V-S$ is a vertex cover $\Rightarrow$ either $u \in V-S$ or $v \in V-S$ or both $\Rightarrow$ either $u \not\in S$ or $v \not\in S$ or both</li>
            <li>Therefore for any edge in $E$, at least one incident vertex is not in $S$, so there are no edges with both sides in $S$, hence $S$ is an independent set of $G$</li>
          </ul>
        </InfoBubble>

        <img src={VIReduction} className="img-fluid" alt="Independent set and vertex cover example" />
        <p>Then we can create a polynomial-time reduction for either direction:</p>
        <ul>
          <li>Independent set $\le_P$ vertex cover: Solve independent set by taking $(G,k)$, then outputting the result of calling the oracle for the vertex cover problem on $(G, n-k)$.</li>
          <li>Vertex cover $\le_P$ Independent set: Solve vertex cover by taking $(G,k)$, then outputting the result of calling the oracle for the independent set problem on $(G, n-k)$.</li>
        </ul>

        <h3>Vertex cover and set cover</h3>
        <InfoBubble title="Set cover problem">
          <p>Given a set $U$ of elements, a collection $S$ of subsets of $U$, and an integer $k$, are there $\le k$ of these subsets whose union is equal to $U$?</p>
          <p>Example use: different pieces of software implement different functionality, find the fewest number of dependencies to implement a set of requirements.</p>
          <p>Example: <$ math="U = \{1, 2, 3, 4, 5, 6, 7 \}" />:</p>
          <ul>
            <li><$ math="S_1 = \{3, 7\}" /></li>
            <li><$ math="S_2 = \{2, 4\}" /></li>
            <li><$ math="S_3 = \{3, 4, 5, 6\}" /></li>
            <li><$ math="S_4 \{5\}" /></li>
            <li><$ math="S_5 = \{1\}" /></li>
            <li><$ math="S_6 = \{1,2,6,7\}" /></li>
          </ul>
          <p>Then $S_3 \cup S_6 = U$ for $k=2$.</p>
        </InfoBubble>

        <p>Theorem: vertex cover $\le_P$ set cover</p>
        <p>Proof: given instance of vertex cover $(G, k)$ we can create an instance of set cover $(U, S, k)$ that has a set cover of size $k$ if and only if $G$ has a vertex cover of size $k$.</p>
        <p>Construction: Take the instance of vertex cover with $G=(V,E)$ and $k$. For every vertex $v \in V$, create subset $S_v$ and add every edge $e \in E$ incident to $v$.</p>
        <img src={VSReduction} className="img-fluid" alt="Set cover and vertex cover example" />
        <p>$G=(V,E)$ contains a vertex cover of size $k$ iff $(U, S, k)$ contains a set cover of size $k$.</p>
        <InfoBubble title="Proof">
          <p>$\Rightarrow$: ("YES" instances solved correctly)</p>
          <ul>
            <li>$X \subseteq V$ is a vertex cover of size $k$ in $G$</li>
            <li>Then every edge is incident to some vertex in set $X$</li>
            <li>Let <$ math="Y = \{S_v \mid v \in X\}" /></li>
            <li>$Y$ is a set cover for $U = E$ of size $k$ as the union of elements of $Y$ covers $E$ and hence covers $U$.</li>
          </ul>
          <p>$\Leftarrow$: ("NO" instances solved correctly)</p>
          <ul>
            <li>$Y \subseteq S$ is a set cover of size $k$ in $(U, S, k)$</li>
            <li>Then the union of elements in $Y$ equals $U$</li>
            <li>Let <$ math="X = \{v \mid S_v \in Y\}" /></li>
            <li>$X$ is a vertex cover for $G=(V,E)$ of size $k$ as every edge must be incident to some vertex in $X$.</li>
          </ul>
        </InfoBubble>
        <p>Then we can solve vertex cover by taking $(G, k)$, then creating an instance of set cover $(U, S, k)$ by the construction above. We then call the oracle for set cover on $(U, S, k)$, then output this result.</p>

        <h3>Decision, search, and optimisation problems</h3>
        <ul>
          <li><b>Decision problem</b>: Does there exist? (Yes or no)</li>
          <li><b>Search problem</b>: Find a solution</li>
          <li><b>Optimisation problem</b>: Find a solution of minimum size</li>
        </ul>
        <p>Decision problem $\equiv_P$ search problem $\equiv_P$ optimisation problem.</p>

        <InfoBubble title="Example: vertex cover">
          <ul>
            <li>Vertex cover: does there exist a vertex cover of size $\le k$?</li>
            <li>Find vertex cover: find a vertex cover of size $\le k$</li>
          </ul>
          <p>Vertex cover $\equiv_P$ find vertex cover</p>
          <ul>
            <li>$\le_P$: if find vertex cover does not return a solution, output NO</li>
            <li>$\ge_P$: find a vertex cover of size $\le k$ by:
              <ul>
                <li>Call the oracle for vertex cover to see if there exists a vertex cover of size $\le k$</li>
                <li>Find a vertex $v$ such that <$ math="G - \{v\}" /> has a vertex cover of size $\le k-1$ (e.g. by iterating over every vertex and calling the oracle for vertex cover again)</li>
                <img src={FindVertexCover} className="img-fluid" alt="Recursively solve find vertex cover using vertex cover" />
                <li>Add $v$ to the vertex cover, since this property only holds for vertices in the vertex cover of size $\le k$</li>
                <li>Recursively find a vertex cover of size $\le k - 1$ in <$ math="G-\{v\}" /></li>
              </ul>
              <img src={FindVertexCover2} className="img-fluid" alt="Recursively solve find vertex cover using vertex cover" />
            </li>
          </ul>

          <p>Find vertex cover $\equiv_P$ find min vertex cover</p>
          <ul>
            <li>$\le_P$: the min vertex cover is a vertex cover</li>
            <li>$\ge_P$: find a vertex cover of minimum size by:
              <ul>
                <li>Find vertex cover of size $k$</li>
                <li>Repeat for vertex cover of size $k-1, k-2, ...$ until no solution</li>
                <li>Requires O(k) calls to the oracle for find vertex cover; could also use binary search</li>
              </ul>
            </li>
          </ul>

          <p>Vertex cover $\equiv_P$ find vertex cover $\equiv_P$ find min vertex cover: by transitivity.</p>
        </InfoBubble>

        <h3>Satisfiability problem</h3>
        
        <InfoBubble title="3-SAT">
          <p>A <b>literal</b> is a boolean variable or its negation: $x_i$ or <$ math="\overline{x_i}" />.</p>
          <p><b>Conjunctive Normal Form</b> (CNF): a propositional formula that is a conjunction ($\land$) of disjunctions / clauses ($\lor$) of literals.</p>
          <p>Example: <$ math="(\overline{x_1} \lor x_2 \lor x_3) \land (x_1 \lor \overline{x_2} \lor x_3) \land (\overline{x_1} \lor x_2 \lor x_4)" /></p>
          <p><b>SAT</b>: Given some CNF formula, can we assign a truth value to each variable such that the formula is equivalent to TRUE?</p>
          <p>Example above has a satisfying assignment of $x_1=T, x_2 = T, x_3 = F, x_4 = F$</p>
          <p><b>3-SAT</b>: Each clause has at most 3 literals.</p>
        </InfoBubble>

        <p>Theorem: 3-SAT $\le_P$ independent set</p>
        <p>Proof: Given some instance $\Phi$ of 3-SAT, we construct an instance $(G, k)$ of the independent set problem that has an independent set of size $k = \mid \Phi \mid$ if and only if $\Phi$ is satisfiable.</p>
        <p>Construction: $G$ contains a node for every occurrence of each literal in $\Phi$. Connect every literal together if it appears in the same clause, and connect each literal to its negation.</p>
        <img src={IS3Sat} className="img-fluid" alt="Independent set and 3SAT reduction" />
        <p>Then $\Phi$ is satisfiable iff $G$ contains an independent set of size $k = \mid \Phi \mid$.</p>

        <InfoBubble title="Proof">
          <p>$\Rightarrow$: Take some satisfying assignment for $\Phi$ and select one true literal from each clause. This is an independent set of size $k = \mid \Phi \mid$. This must be an independent set (no edge connects any two nodes in the set): nodes are only connected if they are from the same clause (but we only selected one literal from each clause) or if they are their own negation (but a variable and its negation cannot be true at the same time).</p>
          <p>$\Leftarrow$: Let $S$ be an independent set of size $k$. $S$ must contain exactly one node in each triangle. Set these literals to true and the remaining literals consistently with this (e.g. $x$ and <$ math="\overline{x}" /> cannot both be true - guaranteed since they are connected by edges, both cannot be in the independent set); then all clauses in $\Phi$ are satisfied.</p>
          <img src={IS3Sat2} className="img-fluid" alt="Independent set and 3SAT reduction" />
        </InfoBubble>

        <p>By transitivity: 3-SAT $\le_P$ independent set $\le_P$ vertex cover $\le_P$ set cover.</p>

        <h3>Reduction strategies</h3>
        <ol>
          <li>Simple equivalence, e.g. independent set $\equiv_P$ vertex cover</li>
          <li>Special case to general case, e.g. vertex cover $\le_P$ set cover (by a basic transformation)</li>
          <li>Encoding, e.g. 3-SAT $\le_P$ independent set (by some more complex construction)</li>
        </ol>

        <h3>Subset sum</h3>
        <InfoBubble title="Subset sum">
          <p>Given $n$ natural numbers and an integer $W$, is there a subset of these numbers that adds up to exactly $W$?</p>
        </InfoBubble>

        <p>Theorem: 3-SAT $\le_P$ subset sum.</p>
        <p>Proof: given an instance $\Phi$ of 3-SAT, we construct an instance of subset sum that has a solution iff $\Phi$ is satisfiable.</p>
        <p>Construction: $\Phi$ has $n$ variables and $k$ clauses. Construct a sequence of $2n+2k$ integers (2 numbers for every variable and every clause), where each integer has $n+k$ digits:</p>
        <ul>
          <li>Create a table of digits (columns) by integers (rows)</li>
          <li>Include one digit (column) for each variable $x_i$ and one digit for each clause $C_i$</li>
          <li>Include two numbers (rows) for each variable, and a further two numbers (rows) for each clause</li>
          <li>In each clause column, put a 1 for an occurrence of each literal</li>
          <li>In each literal column $x_i$, put a 1 for rows $x_i$ and <$ math="\overline{x_i}" /></li>
          <li>In each clause row $C_i$, put a 1 in column $C_i$; for each clause row $C_i'$, put a 2 in column $C_i$</li>
          <li>Complete the table: find $W$ by summing each column, and find $2n+2k numbers by reading across the row digits.</li>
        </ul>

        <InfoBubble title="3-SAT reduces to subset sum: construction">
          <img src={SSReduction} className="img-fluid" alt="3-SAT reduces to subset sum" />
        </InfoBubble>

        <p>We now have an instance of subset sum, with $2n+2k$ decimal integers and a target of $W$. This instance of subset sum has a solution if and only if the original 3-SAT $\Phi$ is satisfiable.</p>

        <InfoBubble title="Proof">
          <p>$\Rightarrow$:</p>
          <ul>
            <li>Suppose some 3-SAT instance $\Phi$ has a satisfying assignment $X$</li>
            <li>For each $x_i$ in $X$: if $x_i$ true then select the integer in row $x_i$; otherwise select the integer in row <$ math="\overline{x_i}" /></li>
            <li>Then each digit $x_i$ sums to 1</li>
            <li>Since $X$ satisfies $\Phi$, each digit $C_i$ sums to at least 1. Select a set of remaining digits such that each $C_i$ digit correctly sums to 4.</li>
            <li>Hence this instance of subset sum has a solution.</li>
            <img src={SS1} className="img-fluid" alt="Example" />
          </ul>
          <p>$\Leftarrow$:</p>
          <ul>
            <li>Suppose the instance of subset sum, constructed by the aforementioned construction from some 3-SAT problem $\Phi$, has a solution $S$ that sums to $W$</li>
            <li>Digit $x_i = 1$ ensures that either row $x_i$ or <$ math="\overline{x_i}" /> is selected; if $x_i$ is selected then assign $x_i=T$, otherwise assign $x_i = F$</li>
            <li>Digit $C_i$ ensures that at least one literal is selected in each clause (otherwise there would be no way for digit $C_i$ to sum to $4$)</li>
            <li>Hence $\Phi$ is satisfied; at least one literal in each clause is true.</li>
          </ul>
        </InfoBubble>

        <h3>P and NP</h3>
        <p><b>P</b>: The set of problems such that an algorithm exists to solve the problem in polynomial time.</p>
        <p><b>NP</b>: The set of problems such that a <i>verifier</i> exists computable in polynomial time for <i>positive</i> instances of the problem.</p>
        <ul>
          <li>Positive instances are "TRUE" solutions to a problem</li>
          <li>Given an instance $s$ of a problem $X$ and a certificate $t$ (proof / solution), a verifier or certifier $C(s,t)$ checks the certificate is valid for positive instances only</li>
          <li>Example: Given two numbers $k, n$ with $1 \lt k \lt n $, does there exist $m \le k$ such that $n$ is divisible by $m$? Then $(2,4)$ is an example of a positive instance of the problem, with $m=2$ a certificate.</li>
          <li>A polynomial-time certifier is a certifier where $C(s, t)$ is a polynomial-time algorithm and certificate $t$ has size $\le p(\mid s \mid)$ for some polynomial $p$.</li>
        </ul>
        <p>All problems in P are also in NP: if we have a polynomial-time algorithm to <i>solve</i> a problem then we can create a polynomial-time verifier using this original algorithm. Hence: $$P \subseteq NP$$</p>

        <h4>P, NP, EXP</h4>
        <p><b>EXP</b>: Decision problems for which there exists an exponential-time algirithm.</p>
        <p>$NP \subseteq EXP$: Consider some problem $X \in NP$. Then there exists a poly-time certifier $C(s,t)$ for $X$ where $t$ has size $\le p(\mid s \mid)$ for some polynomial $p$. Then instance $s$ can be solved by running $C(s, t)$ on all binary strings $t$ satisfying $\mid t \mid \le p(\mid s \mid)$. If $C(s, t)$ returns YES for any of these certificates then return YES.</p>

        <p>Fact: P $\ne$ EXP. Then either P $\ne$ NP, or $NP \ne EXP$, or both. Example: there currently exists no poly-time algorithm for 3-SAT, so it is intractable.</p>

        <p>An open question in computer science is: does P $=$ NP? Is the decision problem as easy as the certification problem?</p>
        <ul>
          <li>If $P = NP$: Then there exists efficient algorithms for all problems in NP</li>
          <li>If $P \ne NP$: Then it is not possible to create an efficient algorithm for these problems</li>
        </ul>

        <h4>Polynomial transformations</h4>
        <p>Problem $X$ polynomial <i>transforms</i> to problem $Y$ if given any instance $x$ of $X$, we can construct an instance $y$ of $Y$ such that $x$ is a yes instance of $X$ iff $y$ is a yes instance of $Y$.</p>
        <p>Polynomial transformation is polynomial reduction, but with just one call to an oracle for $Y$, at the end of the algorithm for $X$.</p>
        <p>Open question: are these two concepts the same with respect to NP?</p>

        <h3>NP hardness</h3>
        <p>If a problem is <b>NP hard</b>, then all problems in NP reduce to it - it is equally the hardest problem in NP: <$ math="\text{Z is NP hard} \iff \forall X \in NP: X \le_P Z" large/></p>
        <p>Suppose problem $Y$ is NP hard, and there exists $W$ such that $Y \le_P W$. Then for all $X \in NP$, $X$ reduces to $Y$ and $Y$ reduces to $W$, so $X$ reduces to $W$. Then $W$ is also NP-hard: 
          <$ math="\text{Y is NP hard} \land Y \le_P W" large />
          <$ math="\Rightarrow \forall X \in NP: X \le_P Y \le_P W" large />
          <$ math="\Rightarrow \forall X \in NP: X \le_P W" large />
        </p>

        <p>Example: Satisfiability is NP hard. It is an example of an algorithm that is easily verified in polynomial time, but has no known polynomial-time algorithm to solve.</p>

        <h3>NP completeness</h3>
        <p>Algorithm $X$ is NP complete if:</p>
        <ol>
          <li>$X \in NP$ (verifiable in poly-time)</li>
          <li>$X$ is NP hard (all problems in $NP$ reduce to it)</li>
        </ol>
        <p>Many problems are NP complete. They are harder than all problems below them; all other NP problems. All NP-complete problems reduce to eachother.</p>

        <p>Example NP-complete problems:</p>
        <ul>
          <li>SAT: 3-SAT, n-SAT for $n \gt 2$: if n-SAT is NP complete then $n+1$-SAT is</li>
          <li>Vertex colouring</li>
          <li>Independent set</li>
        </ul>

        <p>To prove a problem $X$ is NP-complete:</p>
        <ol>
          <li>Prove $X \in NP$: Create an algorithm to verify positive instances of the problem in polynomial time</li>
          <li>Prove $X$ is NP hard: Say problem $Y$ is known to be NP hard. Then if arbitrary instances of $Y$ can be solved with a polynomial number of computational steps, plus a polynomial number of calls to an oracle for $X$, then $Y$ poly-time reduces to $X$ ($Y \le_P X$) and by transitivity $X$ is also NP-hard (all problems in NP reduce to $Y$, so all problems in NP must reduce to $X$).</li>
        </ol>

        <InfoBubble title="Karp's 21 NP-complete problems">
          <p>Once we establish a "natural" NP-complete problem we can rapidly establish others:</p>
          <ol>
            <li>Show that $X \in NP$</li>
            <li>Choose an NP-complete problem $Y$</li>
            <li>Prove that $Y \le_P X$</li>
          </ol>
          <p>The Cook-Levin theorem proves that 3-SAT is NP-complete. Richard Karp used this to prove that <a href="https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems" rel="noreferrer" target="_blank">21 problems are NP complete</a> by reducing satisfiability to these problems.</p>
        </InfoBubble>

        <p>Suppose $Y$ is NP complete. Then $Y \in P$ if and only if $P=NP$. Hence, if there exists a polynomial-time algorithm for an NP-complete problem, then it must be that $P=NP$.</p>

        <InfoBubble title="Proof">
          <p>$\Leftarrow$: If $P=NP$, then $Y\in P$ because $Y \in NP$.</p>
          <p>$\Rightarrow$: Suppose $Y \in P$. Consider any problem $X \in NP$. Since $X \le_P Y$, it must be that $X \in P$. Hence $NP \subseteq P$, and since $P \subseteq NP$, $P=NP$.</p>
        </InfoBubble>

        <p>Most $NP$ problems are known to be either in $P$ or NP complete.</p>
        <p>Theorem: Unless $P=NP$, there exists problems in $NP$ that are neither in $P$ nor NP-complete, called <b>NP-intermediate</b>.</p>
        <p>Example NP-intermediate problems:</p>
        <ul>
          <li>Factor</li>
          <li>Discrete-log</li>
          <li>Graph-isomorphism</li>
        </ul>
      </div>
    );
  }

}

export default Intractability;