import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty === 1 ? "You win!" : "You lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      prevState = this.state.counter + 1;
      return {
        counter: prevState,
      };
    });
  }
  render() {
    const expression = Math.round(Math.random());
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}

export default GameOfChance;
