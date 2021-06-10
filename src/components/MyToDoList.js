import React from "react";

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      toDoList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterInput = this.handleEnterInput.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  handleEnterInput(e) {
    if (e.keyCode === 13) {
      console.log("enter");
      this.handleSubmit();
    }
  }
  render() {
    const items = this.state.toDoList.map((item) => {
      return <li>{item}</li>;
    });
    return (
      <div>
        <h1>My "To Do" List:</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          onKeyDown={this.handleEnterInput}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default MyToDoList;
