import React, {Component} from 'react';

import {HashRouter as Router, Switch} from 'react-router-dom';
import { Route } from 'react-router';

import LoginPage from './components/loginPage/loginPage';
import RegisterPage from './components/registerPage/registerPage';
import HomePage from './components/homePage/homePage';
import SignUpPage from './components/signUpPage/signUpPage';


export default class App extends Component {

  render() {
    return (
      <Router>
          <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/signUp" component={SignUpPage} />
          </Switch>
      </Router>
    );
    
  }
}
