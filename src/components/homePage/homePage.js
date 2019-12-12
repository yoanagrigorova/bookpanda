import React, {Component} from 'react';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router';

import ProfilePage from '../profilePage/profilePage';
import MenuIcon from '@material-ui/icons/Menu';
import AllPage from '../allPage/allPage';
import SubmitPage from '../submitPage/submitPage';
import Badge from '@material-ui/core/Badge';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './homePage.css';

class homePage extends Component {

    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MuiBadge: {
                colorPrimary: {
                    backgroundColor: 'tomato',
                }
            }
        }

    });
    
    toggleMenu() {
        const toggleMenu = document.querySelector('.homePage .header .navigation .hamburgerButton');
        const menu = document.querySelector('.homePage .navigationPhone');
        const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
        toggleMenu.setAttribute('aria-expanded', !open);
        menu.hidden = !menu.hidden;
    }

    render() {
          return(
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <div className="homePage">
                    <header className="header">
                        <span className="logo"> BOOKPANDA</span>
                        <nav className="navigation">
                            <ul className="navigationList">
                                <li><Badge badgeContent={4} color="primary"><Link to="/homePage/profilePage">My profile</Link></Badge></li>
                                <li><Link to="/homePage/allPage">All</Link></li>
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
                            <li><Link to="/homePage/allPage">All</Link></li>
                            <li><Link to="/homePage/feedPage">Feed</Link></li>
                        </ul>
                        </nav>
                    <Router>
                        <Switch>
                            <Route path="/homePage/profilePage" component={ProfilePage} />
                            <Route path="/homePage/allPage" component={AllPage} />
                            <Route path="/homePage/profilePage" component={ProfilePage} />
                            <Route path="/homePage/submitPage" component={SubmitPage} />
                        </Switch>
                    </Router>
        
                </div>
            </MuiThemeProvider>
          )
      }
}

export default homePage