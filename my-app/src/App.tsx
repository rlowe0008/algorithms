import React from 'react';
import Algorithm from './Algorithm';
import './App.css';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

interface Props {
  
}

export type Pages = 'index' |
  'interval-scheduling' |
  'interval-partitioning' |
  'minimising-lateness' |
  'dijkstras' |
  'general-mst';

export enum Category {
  None,
  Graphs,
  AI,
  Scheduling
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
    }, 50);
  }

  render() {

    const pageContent = this.state.screen === 'index' ? 
      <>
        <h1>Algorithms</h1>
        <h2>Greedy algorithms</h2>
        <p></p>
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
              <td>Swap argument</td>
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
              <td>\(O((e +  v)\log v)\)</td>
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
          </tbody>
        </table>

        <h1>Theory</h1>
        <p>TODO: Master Theorem, Big-O, P and NP...</p>
      </> :
      <>
        <Algorithm selectedAlgorithm={this.state.screen} />
      </>;

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