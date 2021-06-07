import React from "react";

class Counter10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      limit: 10,
      isAdd: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.counter);
    if (this.state.isAdd) {
      this.state.counter === this.state.limit
        ? this.setState((state) => ({
            counter: state.counter - 1,
            isAdd: !state.isAdd,
          }))
        : this.setState((state) => ({ counter: state.counter + 1 }));
    } else {
      this.state.counter === 0
        ? this.setState((state) => ({
            counter: state.counter + 1,
            isAdd: !state.isAdd,
          }))
        : this.setState((state) => ({ counter: state.counter - 1 }));
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Counter10;
