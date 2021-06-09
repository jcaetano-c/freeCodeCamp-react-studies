import React from "react";

//HTML
//<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

//JSX
//<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

const constantStyles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    return <div style={constantStyles}>Inline Style Title</div>;
  }
}

export default Colorful;
