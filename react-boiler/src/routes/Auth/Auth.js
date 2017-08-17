import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp, logIn, handlePasswordChange, handleEmailChange } from './../../ducks/auth/authActions';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <div >
        <p>Nav here</p>
      </div>
    );
  }
}

export default connect(state => ({
/*map state to props here examples
  email: state.user.email,
  address: state.user.address
*/
}), {
  /*map dispatch to props examples
  getEmail,
  updateEmail
  */
})(Auth);
