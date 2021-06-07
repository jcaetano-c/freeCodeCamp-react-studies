import React from "react";

class ChangeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
      changed: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    !this.state.changed
      ? this.setState({ name: "React Rocks!", changed: true })
      : this.setState({ name: "Initial State", changed: false });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* Aqui, 'this.handleClick' se refere a variável 'this.handleClick ' dentro do método constructor() que recebeu a propriedade this.handleClick.bind(this) */}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ChangeName;
