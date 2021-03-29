import React from 'react';
import Algorithm from './Algorithm';
import './App.css';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import $ from './Math';
import BigO from './Pages/BigO';
import Intractability from './Pages/Intractability';

interface Props {
  
}

export type Pages = 'index' |
  'interval-scheduling' |
  'interval-partitioning' |
  'minimising-lateness' |
  'dijkstras' |
  'general-mst' |
  'prims' |
  'kruskals' |
  'binary-search' |
  'mergesort' |
  'closest-points' |
  'karatsuba' |
  'big-o' |
  'intractability';

export enum Category {
  None,
  Graphs,
  Scheduling,
  DivideConquer,
  Theory
}

declare global {
  interface Window { MathJax: { typeset: () => void | undefined } | undefined; }
}

window.MathJax = window.MathJax || undefined;

class App extends React.Component<{}, { screen: Pages,  category: Category }> {

  constructor(props: Props) {
    super(props);
    this.state = { screen: 'index', category: Category.None };
    this.navigate = this.navigate.bind(this);
  }

  stringForEnum() {
    // TODO...
  }

  navigate(screen: Pages, category: Category) {
    this.setState({ screen, category });
    setTimeout(() => {
      window.MathJax?.typeset();
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 5);
    }, 5);
  }

  render() {

    const pageContent = this.state.screen === 'index' ? 
      <>
        <h1>Algorithms</h1>
        <p>TODO: Space complexity, common usage for ALL.</p>
        <h2>Greedy algorithms</h2>
        <p>Greedy algorithms make the locally-optimal choice at each stage.</p>
        <h3>Scheduling algorithms</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Algorithm</th>
              <th scope="col">Description</th>
              <th scope="col">Complexity</th>
              <th scope="col">Proof by</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Earliest-finish-time-first for interval scheduling</th>
              <td>A set of items occupy an interval, where items are compatible if they do not overlap. Find the maximum subset of mutually-compatible items.</td>
              <td>\(O(n \log n)\)</td>
              <td>Greedy stays ahead</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('interval-scheduling', Category.Scheduling)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Earliest-start-time-first for interval partitioning</th>
              <td>A set of items occupy an interval, partition these items into the smallest number of rows such that no items overlap.</td>
              <td>\(O(n \log n)\)</td>
              <td>Structural bound</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('interval-partitioning', Category.Scheduling)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Earliest-deadline-first for minimising lateness</th>
              <td>We have a single resource that can complete jobs. We need to schedule jobs for this resource to minimise the maximum lateness across the jobs.</td>
              <td>\(O(n \log n)\)</td>
              <td>Exchange argument</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('minimising-lateness', Category.Scheduling)}>View</button></td>
            </tr>
          </tbody>
        </table>

        <h3>Graph algorithms</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Algorithm</th>
              <th scope="col">Description</th>
              <th scope="col">Complexity</th>
              <th scope="col">Proof by</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Dijkstra's algorithm for shortest paths</th>
              <td>Find the shortest path (in a directed graph without negative edges) between a source node and all other nodes in the graph</td>
              <td>\(O(e\log v)\)</td>
              <td>Loop invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('dijkstras', Category.Graphs)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">General MST Algorithm</th>
              <td>A generic algorithm for finding the Minimum Spanning Tree of a graph.</td>
              <td>N/A</td>
              <td>Loop invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('general-mst', Category.Graphs)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Prim's MST Algorithm</th>
              <td>An algorithm for finding the Minimum Spanning Tree of a graph.</td>
              <td>$O(e \log v)$</td>
              <td>Greedy stays ahead</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('prims', Category.Graphs)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Kruskal's MST Algorithm</th>
              <td>An algorithm for finding the Minimum Spanning Tree of a graph. Also includes notes on the reverse-delete algorithm.</td>
              <td>$O(e \log e)$</td>
              <td>Exchange argument</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('kruskals', Category.Graphs)}>View</button></td>
            </tr>
          </tbody>
        </table>

        <h3>Divide-and-conquer</h3>
        <p>Divide and conquer involves dividing a problem into several sub-problems of the same kind, solving each sub-problem recursively, then combining solutions to sub-problems into an overall solution.</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Algorithm</th>
              <th scope="col">Description</th>
              <th scope="col">Complexity</th>
              <th scope="col">Proof by</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Binary search</th>
              <td>Given a sorted array $A$ of $n$ elements, find the position of a target element $T$.</td>
              <td>$O(\log n)$</td>
              <td>Recursive invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('binary-search', Category.DivideConquer)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Mergesort</th>
              <td>Given a list $L$ of $n$ elements, rearrange them in ascending order.</td>
              <td>\(O(n\log n)\)</td>
              <td>Loop invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('mergesort', Category.DivideConquer)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Closest pair of points</th>
              <td>Given $n$ points in the plane, find a pair of points with the smallest Euclidean distance between them.</td>
              <td>$O(n \log n)$</td>
              <td>Recursive invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('closest-points', Category.DivideConquer)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Karatsuba's integer multiplication algorithm</th>
              <td>Given two $n$-bit integers $x,y$, multiply them together.</td>
              <td><$ math="O(n^{1.585})" /></td>
              <td>Recursive invariant</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('karatsuba', Category.DivideConquer)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Strassen's matrix multiplication algorithm</th>
              <td>Given two $n \times n$ matrix $A, B$, calculate $AB$.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
          </tbody>
        </table>

        <h3>Dynamic programming</h3>
        <p>Where a problem has <i>overlapping</i> sub-problems, solve each sub-problem and use these solutions to solve other sub-problems and the overall problem.</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Algorithm</th>
              <th scope="col">Description</th>
              <th scope="col">Complexity</th>
              <th scope="col">Proof by</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Weighted interval scheduling</th>
              <td>For a set of jobs with weights, find the maximum-weight subset of mutually-compatible jobs.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
            <tr>
              <th scope="row">Knapsack algorithm</th>
              <td>For a set of items, each with a value and weight, find the maximum total value of items that can be stored without exceeding some total weight.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
            <tr>
              <th scope="row">Sequence alignment</th>
              <td>Find an alignment between two strings that minimises the edit distance.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
            <tr>
              <th scope="row">Hirschberg's algorithm</th>
              <td>Sequence alignment in linear time.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
            <tr>
              <th scope="row">Bellman-Ford-Moore (shortest paths)</th>
              <td>Find the shortest path between nodes when the graph contains negative edge weights.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
            <tr>
              <th scope="row">Bellman-Ford-Moore (negative cycles)</th>
              <td>Detect negative cycles in a graph.</td>
              <td>TODO</td>
              <td>TODO</td>
              <td><button type="button" className="btn btn-primary">View</button></td>
            </tr>
          </tbody>
        </table>

        <h1>Theory</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Big-O notation</th>
              <td>Analysing the complexity of algorithms with Big-O notation.</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('big-o', Category.Theory)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Intractability</th>
              <td>P and NP hardness and completeness.</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate('intractability', Category.Theory)}>View</button></td>
            </tr>
          </tbody>
        </table>
      </> : this.state.screen === 'big-o' ?
        <BigO />
      : this.state.screen === 'intractability' ?
        <Intractability />
      :
      <Algorithm selectedAlgorithm={this.state.screen} />;

    const breadcrumbs = this.state.screen !== 'index' ? 
      <>
        <Breadcrumb.Item active>Something</Breadcrumb.Item>
      </> : <></>;

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Algorithm implementations
          </Navbar.Brand>
          <Breadcrumb className="inline-float">
            <Breadcrumb.Item href="#" onClick={() => this.navigate('index', Category.None)}>Home</Breadcrumb.Item>
            {breadcrumbs}
          </Breadcrumb>
        </Navbar>
        <Container>
          {pageContent}
        </Container>
      </div>
    )
  }

}

export default App;