import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeRunner extends React.Component<{ run: string }, {output: string}> {

  constructor(props: { run: string }) {
    super(props);
    this.state = { output: '' };
    this.runAlgorithm = this.runAlgorithm.bind(this);
  }

  runAlgorithm() {
    this.setState({ output: JSON.stringify(eval(this.props.children + this.props.run)) });
  }

  render() {
    return (
      <div>
        <div className="alert alert-secondary" role="alert">
          <button type="button" className="btn btn-primary" onClick={this.runAlgorithm}>Run</button>
          { this.state.output !== '' && ` Output: ${this.state.output}` }
        </div>
        <SyntaxHighlighter language="javascript" style={docco} showLineNumbers={true} >
          { this.props.children }
        </SyntaxHighlighter>
      </div>
    );
  }

}

export default CodeRunner;