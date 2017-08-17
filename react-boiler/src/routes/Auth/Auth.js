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
    const { email, password } = this.props
    console.log( this.props.user );
    return(
      <div >

        <p>Nav here</p>
        <button onClick={()=>this.props.logIn({email, password})}>Login</button>
        <input value={email} onChange={(e)=> this.props.handleEmailChange(e.target.value)} placeholder="email" />
        <input value={password} placeholder="password" onChange={(e)=> this.props.handlePasswordChange(e.target.value)} />
        <button onClick={()=>this.props.signUp({email, password})}>Signup</button>
      </div>
    );
  }
}

export default connect(state => ({
  password: state.auth.password,
  email: state.auth.email,
  user: state.auth.user
}), { signUp, handlePasswordChange, handleEmailChange, logIn })(Auth);
