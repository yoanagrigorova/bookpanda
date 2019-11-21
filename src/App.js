import React, {Component} from 'react';

import {HashRouter as Router, Switch} from 'react-router-dom';
import { Route } from 'react-router';

import LoginPage from './components/loginPage/loginPage'
import RegisterPage from './components/registerPage/registerPage'





export default class App extends Component {

  render() {
    return (
      <Router basename="/submission">
        <div className="container">
          <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
    
  }
}
