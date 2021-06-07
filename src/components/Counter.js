import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.multiply = this.multiply.bind(this);
    this.div = this.div.bind(this);
  }
  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
  multiply() {
    this.setState((state) => ({ count: state.count * 2 }));
  }
  div() {
    this.setState((state) => ({ count: state.count / 2 }));
  }
  reset() {
    this.setState((state) => ({ count: 0 }));
  }
  render() {
    return (
      <div>
        <h1>Current Count: {this.state.count}</h1>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="mult" onClick={this.multiply}>
          Double!
        </button>
        <button className="div" onClick={this.div}>
          Half!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
