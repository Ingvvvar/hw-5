import React from 'react';


export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ value: this.state.value * 0.5 })
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const value = this.state.value;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Input</legend>
            <input type="number" value={value} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
        <h1>Value {value}</h1>

      </div>

    );
  }
}