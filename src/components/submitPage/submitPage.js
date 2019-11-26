import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {HashRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router';

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
          email: '',
          password: '',
          error: '',
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        const name = event.target.name;
        this.setState({
          [name]: event.target.value,
          error: ''
        });
      }

      render() {
          return ( 
              <div className="loginContainer">
                <MuiThemeProvider theme={this.getMuiTheme()}>
                <section className="allTitle">
                    Submit your post here:
                  </section>
              <Paper className="submitPaper">
                <form className="submittForm" id="submitForm">
                  <TextField
                    autoFocus
                    fullWidth
                    required
                    value = {this.state.title}
                    onChange = {this.handleChange}
                    name="title"
                    margin="dense"
                    label="Title"
                    type="text"
                  />
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={10}
                    value = {this.state.content}
                    onChange = {this.handleChange}
                    name="content"
                    margin="dense"
                    label="Content"
                    type="text"
                  />
                  <div className="loginButton">
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained" 
                      //disabled={!this.state.username || !this.state.password}
                     >
                        Submit
                    </Button>
                  </div>
                </form>
              </Paper>
            <div className="extraContent">
              <div className="loginErrors">
                {
                  this.state.error &&
                  <div className="error">Something went wrong.</div>
                }
              </div>
              </div>
            </MuiThemeProvider>       
          </div>
          );
      }

}

export default SignUpPage