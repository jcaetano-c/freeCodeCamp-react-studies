import React from "react";

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Stateful Component Name",
    };
  }
  render() {
    return (
      <div>
        <h1>StatefulComponent</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export const MyStatefulComponent = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jairo Caetano",
      age: 20,
      city: "Blumenau",
    };
  }

  render() {
    //Como aqui é possível escrever cód. JS puro, não é necessário {}
    const name = this.state.name;
    const age = this.state.age;
    const city = this.state.city;
    return (
      <div>
        <h1>MyStatefulComponent</h1>
        <p>
          Meu nome é <strong>{name}</strong>, eu tenho <strong>{age}</strong> e
          moro em <strong>{city}</strong>.
        </p>
      </div>
    );
  }
};

export { StatefulComponent };
