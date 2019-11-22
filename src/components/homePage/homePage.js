import React, {Component} from 'react';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router';

import ProfilePage from '../profilePage/profilePage';


import './homePage.css';

class homePage extends Component {
    
    render() {
          return(
            <div className="homePage">
                <header className="header">
                    <span className="logo"> BOOKPANDA</span>
                    <nav className="navigation">
                        <ul className="navigationList">
                            <li><Link to="/homePage/profilePage">My profile</Link></li>
                            <li><Link to="/homePage/alPage">All</Link></li>
                            <li><Link to="/homePage/feedPage">Feed</Link></li>
                        </ul>
                    </nav>
                </header>

                <Router>
                    <Switch>
                        <Route path="/homePage/profilePage" component={ProfilePage} />
                    </Switch>
                </Router>
       
            </div>
          )
      }
}

export default homePage