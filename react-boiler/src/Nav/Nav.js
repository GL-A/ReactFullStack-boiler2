import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <div style={{border: '1px black solid'}}>
        <p>Nav here</p>
        <Link to="/" >Home</Link>
      <br/>
        <Link to="/auth">Auth</Link>
      </div>
    );
  }
}

export default connect(state => ({
  state
}), { })(Nav);
