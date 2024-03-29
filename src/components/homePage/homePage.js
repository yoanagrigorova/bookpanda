import React, { Component } from 'react';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import { Route } from 'react-router';

import ProfilePage from '../profilePage/profilePage';
import MenuIcon from '@material-ui/icons/Menu';
import AllPage from '../allPage/allPage';
import SubmitPage from '../submitPage/submitPage';
import SinglePost from "../singlePost/singlePost"
import FeedPage from "../feedPage/feedPage"

import './homePage.css';

import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    //   login: (data) => dispatch(login(data))
})

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

    signOut = () => {
        window.localStorage.removeItem("currentUser");
    }

    render() {
        return (
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <div className="homePage">
                    <header className="header">
                        <span className="logo"> BOOKPANDA</span>
                        <nav className="navigation">
                            <ul className="navigationList">
                                <li><Link to={"/homePage/profilePage/"+JSON.parse(window.localStorage.getItem("currentUser")).username}>My profile</Link></li>
                                <li><Link to="/homePage/allPage">All</Link></li>
                                <li><Link to="/homePage/feedPage">Feed</Link></li>
                                <li><Link to="/" onClick={this.signOut}>Sign Out</Link></li>
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
                            <li><Link to={"/homePage/profilePage/"+JSON.parse(window.localStorage.getItem("currentUser")).username}>My profile</Link></li>
                            <li><Link to="/homePage/allPage">All</Link></li>
                            <li><Link to="/homePage/feedPage">Feed</Link></li>
                            <li><Link to="/" onClick={this.signOut}>Sign Out</Link></li>
                        </ul>
                    </nav>
                    <Router>
                        <Switch>
                            <Route path="/homePage/profilePage" component={ProfilePage} />
                            <Route path="/homePage/allPage" component={AllPage} />
                            <Route path="/homePage/profilePage/:username" component={ProfilePage} />
                            <Route path="/homePage/submitPage" component={SubmitPage} />
                            <Route path="/homePage/singlePost/:id" component={SinglePost} />
                            <Route path="/homePage/feedPage" component={FeedPage} />
                        </Switch>
                    </Router>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage)