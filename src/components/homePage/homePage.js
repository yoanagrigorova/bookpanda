import React, {Component} from 'react';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router';

import ProfilePage from '../profilePage/profilePage';
import MenuIcon from '@material-ui/icons/Menu';


import './homePage.css';

class homePage extends Component {

    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        console.log("hey")
        const toggleMenu = document.querySelector('.homePage .header .navigation .hamburgerButton');
        const menu = document.querySelector('.homePage .navigationPhone');

        const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
        console.log(open);
        toggleMenu.setAttribute('aria-expanded', !open);
        menu.hidden = !menu.hidden;
    }

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
                        <button
                            className="hamburgerButton"
                            onClick={this.toggleMenu}
                        ><MenuIcon></MenuIcon>
                        </button>
                    </nav>
                </header>
                <nav className="navigationPhone">
                    <ul className="navigationListPhone">
                        <li><Link to="/homePage/profilePage">My profile</Link></li>
                        <li><Link to="/homePage/alPage">All</Link></li>
                        <li><Link to="/homePage/feedPage">Feed</Link></li>
                    </ul>
                    </nav>
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