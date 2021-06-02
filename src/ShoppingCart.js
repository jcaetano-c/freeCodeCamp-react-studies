import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
  return (
    <>
      <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    </>
  );
};

//Tipa que a props quantity do tipo number deve ser atribuida
Items.propTypes = { quantity: PropTypes.number.isRequired };
//Define um valor padrão para o props caso não lhe seja atribuído um
Items.defaultProps = {
  quantity: 0,
};

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Items />
        <Items quantity={10} />
      </div>
    );
  }
}

export default Cart;
