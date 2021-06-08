import React from "react";

class FirstNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <h1>Hello, my name is:</h1>
        <p>{this.props.name}</p>
      </nav>
    );
  }
}

export default FirstNavBar;
