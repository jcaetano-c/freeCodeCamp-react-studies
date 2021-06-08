import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;
    this.setState(() => ({ input: value }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.input}</h1>

        <input value={this.state.input} onChange={this.handleChange} />
      </div>
    );
  }
}

export default ControlledInput;
