import React from "react";

class NowYouSeeMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((state) => ({ visibility: !state.visibility }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h1>Now you see me!</h1>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="hidden">Now you see me!</h1>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

export default NowYouSeeMe;
