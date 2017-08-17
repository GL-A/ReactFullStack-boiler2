import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        Home component
      </div>
    );
  }
}

export default connect(state => ({
  state
}), {})(Home);
