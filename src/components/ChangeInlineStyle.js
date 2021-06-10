import React from "react";

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {};
    if (this.state.input.length > 15) {
      inputStyle.color = "red";
      inputStyle.transition = "0.5s";
    }
    return (
      <div>
        <h1 style={inputStyle}>Don't Type Too Much:</h1>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default GateKeeper;
