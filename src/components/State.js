import React from 'react';



export class State extends React.Component {
  state = {
    value: ''
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value * 0.5)
    console.log(this.state.value * 0.05)

  }

  render() {
    const value = this.state.value;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Input</legend>
            <input type="number" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value='Submit' />
          </fieldset>
          <h2>Value*0.5 = {value * 0.5}</h2>
          <h2>Value*0.05 = {value * 0.05}</h2>
        </form>


      </div>
    );
  }
}