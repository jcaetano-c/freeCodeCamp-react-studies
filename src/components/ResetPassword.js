import React from "react";

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
      </div>
    );
  }
}

/*Uma classe só pode ser chamada depois de instanciada. Sendo assim, a classe Pai sempre fica mais abaixo das filhas.*/
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>ResetPassword.js</h1>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings.</h3>
        <ReturnTempPassword tempPassword="12345678" />
      </div>
    );
  }
}

export default ResetPassword;
