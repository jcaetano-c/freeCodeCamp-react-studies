import React from "react";

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
  // Useless constructor - nesse caso
  /*constructor(props) {
    super(props);
  }*/
  render() {
    return (
      <div>
        <h1>ToDo.js</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["study", "buy a laptop", "go to doctor"]} />
      </div>
    );
  }
}

export default ToDo;
