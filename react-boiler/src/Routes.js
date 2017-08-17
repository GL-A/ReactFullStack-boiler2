import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Nav/Nav';
import './App.css';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Nav/>
          <div className="Routes">
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route render={() => <h2>Page not found!</h2>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
