import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router';
import './profilePage.css';
import PostCard from '../postCard/postCard';
import { connect } from 'react-redux';
import fetchUsers from "../../actions/fetchUsers"

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers())
})
class profilePage extends Component {

  getMuiTheme = () => createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {

      MuiButton: {
        root: {
          padding: '0',
        },
        outlinedPrimary: {
          margin: '0 5px',
          padding: '0',
          border: 'none',
          borderBottom: '2px solid #f2935c',
          borderRadius: '0px',
          color: 'black',
          fontFamily: "'Monsterrat', sans-serif",
          '&:hover': {
            backgroundColor: 'none',
            border: 'none',
            borderBottom: '2px solid tomato',
          },
          '&$disabled': {
            border: 'none',
          },
        },
      },

      MuiSvgIcon: {
        root: {
          fontSize: '1.5em',
        }
      },

      MuiTouchRipple: {
        root: {
          display: 'none',
        }
      },
    },
  });

  constructor(props) {
    super(props);
    this.props.getUsers();
    this.state = {
      // currentUser : this.props.usersReducer.user ? this.props.usersReducer.user : JSON.parse(window.localStorage.getItem("currentUser")) 
      currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
      user: JSON.parse(window.localStorage.getItem("currentUser")),
      mounted: false
    }
  }

  componentDidMount() {
    let self = this;

    setTimeout(() => {
      if (self.props.location.pathname.split("/")[3]) {
        let user = this.props.usersReducer.users.find(user => user.username === self.props.location.pathname.split("/")[3]);
        console.log(self.props.location.pathname.split("/")[3])
        console.log(user)
        console.log(this.props.usersReducer)
        self.setState({
          user: user,
          mounted: true
        })
      }

    }, 400)
  }

  componentWillUpdate(){
    if(this.state.mounted && this.props.location.pathname.split("/")[3] !== this.state.user.username){
      let user = this.props.usersReducer.users.find(user => user.username === this.props.location.pathname.split("/")[3]);
        console.log(user)
        console.log(this.props.usersReducer)
        this.setState({
          user: user
        })
      return true;
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <div className="profilePage">
          <section className="userProfile">
            <span className="userId"><FaceIcon className="userIcon"></FaceIcon>{this.state.user.username}</span>
            <div className="followers">
              <div className="label">
                subsribers:
                      </div>
              <div className="numbers">
                256
                      </div>
            </div>
            <div className="following">
              <div className="label">
                subsribed to:
                      </div>
              <div className="numbers">
                305
                      </div>
            </div>
            <div className="submitPostButton">
              {
                this.state.user.username === this.state.currentUser.username ?
                  <Button variant="outlined" color="primary">
                    <Link to="/homePage/submitPage">Submit a post</Link>
                  </Button>
                  :
                  <Button variant="outlined" color="primary">
                    Subscribe
                  </Button>
              }
            </div>
          </section>
          <section className="userPosts">
            {/* <PostCard
              title="Lorem ipsum dolor sit amet"
              author="author"
              sampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              date="Aug 10th 2019"
            /> */}
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

// export default profilePage
export default connect(mapStateToProps, mapDispatchToProps)(profilePage);