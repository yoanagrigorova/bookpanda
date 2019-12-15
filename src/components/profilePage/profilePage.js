import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';
import './profilePage.css';
import PostCard from '../postCard/postCard';
import { connect } from 'react-redux';
import fetchUsers from "../../actions/fetchUsers"
import getUserPublications from '../../actions/getUserPublications'
import subscribe from '../../actions/subscribe'
import getSubscriptions from '../../actions/getSubscriptions'
import getSubscribers from '../../actions/getSubscribers'

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  getUserPublications: (userId) => dispatch(getUserPublications(userId)),
  subscribe: (data) => dispatch(subscribe(data)),
  getSubscriptions: (id) => dispatch(getSubscriptions(id)),
  getSubscribers: (id) => dispatch(getSubscribers(id))
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
      currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
      user: JSON.parse(window.localStorage.getItem("currentUser")),
      publications: [],
      subsctiptions: 0,
      subscribers: 0,
      mounted: false
    }
    setTimeout(() => {
      if (this.props.location.pathname.split("/")[3]) {
        let user = this.props.usersReducer.users.find(user => user.username === this.props.location.pathname.split("/")[3])
        if (user) {
          this.props.getUserPublications(user.id);
          this.props.getSubscriptions(user.id);
          this.props.getSubscribers(user.id)
        }
      } else {
        this.props.getUserPublications(this.state.currentUser.id)
        this.props.getUserPublications(this.state.currentUser.id);
          this.props.getSubscriptions(this.state.currentUser.id);
          this.props.getSubscribers(this.state.currentUser.id)
      }
    }, 300)
  }

  componentDidMount() {
    let self = this;

    setTimeout(() => {
      if (self.props.location.pathname.split("/")[3]) {
        let user = this.props.usersReducer.users.find(user => user.username === self.props.location.pathname.split("/")[3]);
        console.log(this.props)
        self.setState({
          user: user,
          publications: this.props.publicationReducer.publications,
          subsctiptions: this.props.subscribtionReducer.subscriptions,
          subscribers: this.props.subscribtionReducer.subscribers,
          mounted: true
        })
      }

    }, 500)
  }

  componentWillUpdate() {
    if (this.state.mounted && this.props.location.pathname.split("/")[3] !== this.state.user.username) {
      let user = this.props.usersReducer.users.find(user => user.username === this.props.location.pathname.split("/")[3]);
      this.setState({
        user: user,
      })
      return true;
    }
  }

  convertMonth = (month) => {
    switch (month) {
      case 0:
        return "Jan"
      case 1:
        return "Feb"
      case 2:
        return "Mar"
      case 3:
        return "Apr"
      case 4:
        return "May"
      case 5:
        return "Jun"
      case 6:
        return "Jul"
      case 7:
        return "Aug"
      case 8:
        return "Sep"
      case 9:
        return "Oct"
      case 10:
        return "Nov"
      case 11:
        return "Dec"
      default:
        return ""
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <div className="profilePage">
          <section className="userProfile">
            <span className="userId"><FaceIcon className="userIcon"></FaceIcon>{this.state.user ? this.state.user.username : ''}</span>
            <div className="followers">
              <div className="label">
                subsribers:
                      </div>
              <div className="numbers">
              {this.state.subscribers}
                      </div>
            </div>
            <div className="following">
              <div className="label">
                subsribed to:
                      </div>
              <div className="numbers">
                {this.state.subsctiptions}
              </div>
            </div>
            <div className="submitPostButton">
              {
                this.state.user.username === this.state.currentUser.username ?
                  <Button variant="outlined" color="primary">
                    <Link to="/homePage/submitPage">Submit a post</Link>
                  </Button>
                  :
                  <Button variant="outlined" color="primary" onClick={() => {
                    let data = {
                      subscriber: {
                        id: this.state.currentUser.id
                      },
                      subscribedTo: {
                        id: this.state.user.id
                      }
                    }
                    this.props.subscribe(data)
                    this.setState({
                      subscribers: this.state.subscribers+1
                    })
                  }}>
                    Subscribe
                  </Button>
              }
            </div>
          </section>
          <section className="userPosts">
            {
              this.state.publications && this.state.publications.reverse().map((publication) => (
                <PostCard
                  id={publication.id}
                  title={publication.title}
                  author={publication.user}
                  sampleText={publication.text}
                  date={this.convertMonth(new Date(publication.created).getMonth()) + " " + new Date(publication.created).getDate() + " " + new Date(publication.created).getFullYear()}
                  key={publication.created}
                />
              ))
            }
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

// export default profilePage
export default connect(mapStateToProps, mapDispatchToProps)(profilePage);