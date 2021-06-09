import React from "react";

const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: "",
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}

export default CheckUserAge;
