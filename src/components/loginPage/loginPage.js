import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './loginPage.css'

class LoginPage extends Component { 

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

      MuiFormControl:{
        root: {
          padding: '0.3em',
          backgroundColor: 'white',
          border: 'none',
          '&:focus-within': {
            boxShadow: 'inset 0 0 0 1px white',
          }
        },
      },

      MuiInputBase:{
        input: {
          paddingLeft: '1em',
        },
      },

      MuiInputLabel: {
        root:{
          padding: '0.5em 1em 1em 1em',
          margin: '0',
        },
        animated:{
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

      MuiFormLabel:{
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
            borderBottom: '2px solid #f2935c',
          },
          '&$disabled': {
            border: 'none',
          },
        },
        containedPrimary: {
          padding: '0.3em 1.5em 0.3em 1.5em',
          backgroundColor: '#f2935c',
          color: 'black',
          boxShadow: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'white',
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
          error: '',
        };
      }


      render() {
          return ( 
              <div className="loginContainer">
                <MuiThemeProvider theme={this.getMuiTheme()}>
                  <div className="loginForm">
                  <div className="logo">
                <span> Welcome to Bookpanda! </span>
              </div>
              <Paper className="loginPaper">
                <form className="loginForm" id="loginForm">
                  <TextField
                    autoFocus
                    fullWidth
                    required
                    name="username"
                    margin="dense"
                    label="Email"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    required
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
                      //disabled={!this.state.username || !this.state.password}
                    >
                        Login
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
              <Typography>Don`t have an account?</Typography>
              <Button variant="outlined" color="primary">
                    Sign up
              </Button>
                    </div>
                 </MuiThemeProvider>
              </div>
          );
      }

}

export default LoginPage