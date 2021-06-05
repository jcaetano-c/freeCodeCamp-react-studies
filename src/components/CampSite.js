import React from "react";
import PropTypes from "prop-types";

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>CampSite</h1>
        <Camper />
      </div>
    );
  }
}

//component Camper as a function
// const Camper = (props) => {
//   return <p>{props.name}</p>;
// };

//component Camper as a class
class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.name}</p>;
  }
}

Camper.propTypes = { name: PropTypes.string.isRequired };
Camper.defaultProps = { name: "CamperBot" };

export default CampSite;
