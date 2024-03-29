import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import registration from '../../actions/registration';

const mapStateToProps = state => ({
  ...state
})

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchUsers: fetchUsers
// }, dispatch)

const mapDispatchToProps = dispatch => ({
  registration: (data) => dispatch(registration(data))
 })

class SignUpPage extends Component {

  getMuiTheme = () => createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiPaper: {
        root: {
          padding: '0px',
          marginBottom: '0px',
          backgroundColor: 'transparent',
        },
        elevation1: {
          boxShadow: 'none',
        },
      },

      MuiFormControl: {
        root: {
          padding: '0.3em',
          backgroundColor: 'white',
          border: 'none',
          '&:focus-within': {
            boxShadow: 'inset 0 0 0 1px white',
          }
        },
      },

      MuiInputBase: {
        input: {
          paddingLeft: '1em',
        },
      },

      MuiInputLabel: {
        root: {
          padding: '0.5em 1em 1em 1em',
          margin: '0',
        },
        animated: {
          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        },
        marginDense: {
          transform: 'translate(0, 0.5em) scale(1)',
        }
      },

      MuiInput: {
        underline: {
          '&&&&:hover:before': {
            opacity: '0',
          },
          '&::before': {
            border: 'none',
          },
          '&::after': {
            border: 'none',
          },
          '&::hover': {
            border: 'none',
          },

        }
      },

      MuiFormLabel: {
        root: {
          '&$focused': {
            color: 'black',
          },
        }
      },

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
          '&:hover': {
            backgroundColor: 'none',
            border: 'none',
            borderBottom: '2px solid tomato',
          },
          '&$disabled': {
            border: 'none',
          },
        },
        containedPrimary: {
          padding: '0.3em 1.5em 0.3em 1.5em',
          backgroundColor: '#f2935c',
          color: 'white',
          boxShadow: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'tomato',
            boxShadow: 'none',
          }
        },

        textPrimary: {
          padding: '0.3em 1.5em 0.3em 1.5em',
          boxSizing: 'border-box',
          color: 'black',
          boxShadow: 'inset 0 0 0 2px #f2935c',
          fontWeight: 'bold',
        },
        contained: {
          '&:active': {
            boxShadow: 'none',
          }
        },

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
    this.state = {
      username: '',
      password: '',
      email: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name.toLowerCase();
    this.setState({
      [name]: event.target.value,
      error: ''
    });
  }

  register = (e) => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.props.registration(data);
    let self = this;
    setTimeout(()=>{
      if(self.props.usersReducer.user){
        let currUser = {
          id: self.props.usersReducer.user.id,
          username: self.props.usersReducer.user.username,
          email: self.props.usersReducer.user.email
        }
        window.localStorage.setItem("currentUser", JSON.stringify(currUser));
        this.props.history.push('/homePage/profilePage/' + this.state.username, this.props.usersReducer.user);
      }
    }, 700)
  }

  render() {
    return (
      <div className="loginContainer">
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <div className="loginForm">
            <div className="loginLogo">
              <span> Welcome to Bookpanda! </span>
            </div>
            <Paper className="loginPaper">
              <form className="loginForm" id="loginForm">
                <TextField
                  autoFocus
                  fullWidth
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  margin="dense"
                  label="Email"
                  type="email"
                />
                <TextField
                  fullWidth
                  required
                  value={this.state.username}
                  onChange={this.handleChange}
                  name="username"
                  margin="dense"
                  label="Username"
                  type="text"
                />
                <TextField
                  fullWidth
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  margin="dense"
                  label="Password"
                  type="password"
                />
                <div className="loginButton">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={this.register}
                  //disabled={!this.state.username || !this.state.password}
                  >
                    sign up
                    </Button>
                </div>
              </form>
            </Paper>
          </div>
          <div className="extraContent">
            <div className="loginErrors">
              {
                this.state.error &&
                <div className="error">Wrong username or password.</div>
              }
            </div>
            <Typography>Already have an account?</Typography>
            <Button variant="outlined" color="primary">
              <Link to="/">Log in</Link>
            </Button>
          </div>
        </MuiThemeProvider>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (SignUpPage)