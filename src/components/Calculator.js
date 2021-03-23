import React from 'react';

const numberNames = {
  number1: 0.5,
  number2: 0.05
};

function toNumber1(number2) {
  return number2 * 0.05;
}

function toNumber2(number1) {
  return number1 * 0.5;
}

function tryConvert(number, convert) {
  const input = parseFloat(number);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const number = this.props.number;
    const variant = this.props.variant;
    return (
      <fieldset>
        <legend>Enter number for * {numberNames[variant]}:</legend>
        <input value={number} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.hamdleNumber2Change = this.hamdleNumber2Change.bind(this);
    this.state = {number: '', variant: 'number1'};
  }

  handleNumber1Change(number) {
    this.setState({variant: 'number1', number});
  }

  hamdleNumber2Change(number) {
    this.setState({variant: 'number2', number});
  }

  render() {
    const variant = this.state.variant;
    const number = this.state.number;
    const number1 = variant === 'number2' ? tryConvert(number, toNumber1) : number;
    const number2 = variant === 'number1' ? tryConvert(number, toNumber2) : number;

    return (
      <div>
        <InputNumber
          variant="number1"
          number={number1}
          onTemperatureChange={this.handleNumber1Change} />
        <InputNumber
          variant="number2"
          number={number2}
          onTemperatureChange={this.hamdleNumber2Change} />
      </div>
    );
  }
}