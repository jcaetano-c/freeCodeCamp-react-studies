import React from "react";

class SubmitInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    this.setState((state) => ({
      submit: state.input,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.submit}</h1>
        <form>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.handleSubmit}
            style={{ marginLeft: 15 }}
          >
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitInput;
