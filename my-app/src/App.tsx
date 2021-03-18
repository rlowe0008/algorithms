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

export enum Pages {
  Index,
  Prims,
  Kruskals,
  CSPSolver,
  IntervalScheduling,
  IntervalPartitioning,
  WeightedIntervalScheduling
};

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
    this.state = { screen: Pages.Index, category: Category.None };
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

    const pageContent = this.state.screen === Pages.Index ? 
      <>
        <h1 style={{ 'marginTop': '50px' }}>Algorithms</h1>
        <h2>Greedy algorithms</h2>
        <p></p>
        <h3>Scheduling algorithms</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Algorithm</th>
              <th scope="col">Description</th>
              <th scope="col">Complexity</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Earliest-finish-time-first for interval scheduling</th>
              <td>A set of items occupy an interval, where items are compatible if they do not overlap. Find the maximum subset of mutually-compatible items.</td>
              <td>\(O(n \log n)\)</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate(Pages.IntervalScheduling, Category.Scheduling)}>View</button></td>
            </tr>
            <tr>
              <th scope="row">Earliest-start-time-first for interval partitioning</th>
              <td>A set of items occupy an interval, partition these items into the smallest number of rows such that no items overlap.</td>
              <td>\(O(n \log n)\)</td>
              <td><button type="button" className="btn btn-primary" onClick={() => this.navigate(Pages.IntervalPartitioning, Category.Scheduling)}>View</button></td>
            </tr>
          </tbody>
        </table>
      </> :
      <>
        <Algorithm selectedAlgorithm={this.state.screen} />
      </>;

    const breadcrumbs = this.state.screen !== Pages.Index ? 
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
            <Breadcrumb.Item href="#" onClick={() => this.navigate(Pages.Index, Category.None)}>Home</Breadcrumb.Item>
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