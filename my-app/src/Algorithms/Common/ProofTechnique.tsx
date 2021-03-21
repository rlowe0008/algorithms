import React from 'react';

class ProofTechnique extends React.Component<{ name: string }, { expanded: boolean }> {

  constructor(props: {name: string}) {
    super(props);
    this.state = { expanded: false };
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
    setTimeout(() => {
      window.MathJax?.typeset();
    }, 50);
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        <div className="row">
          <div className="col-md-10 col-sm-8">
            <h5>Proof by: { this.props.name } </h5>
          </div>
          <div className="col-md-2 col-sm-4">
            <button type="button" className="btn btn-primary" onClick={this.expand}>
              { this.state.expanded ? 'Close' : 'Expand' }
            </button>
          </div>
        </div>
        { this.state.expanded && this.props.children}
      </div>
    );
  }

}

export default ProofTechnique;