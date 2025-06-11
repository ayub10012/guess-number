import React, { Component } from 'react';
import Result from './Result';

class App extends Component {
  static defaultProps = {
    secret: Math.floor(Math.random() * 20) + 1
  };

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div>
          <label htmlFor="term" style={{ fontSize: '20px' }}>
            Guess a Number between 1 to 20:
          </label>
        </div>
        <input
          id="term"
          type="number"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
          style={{ padding: '8px', marginTop: '10px' }}
        />
        <Result term={this.state.term} secretNum={this.props.secret} />
      </div>
    );
  }
}

export default App;
