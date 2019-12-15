import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './commentCard.css';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';

import './commentCard.css';
import addComment from '../../actions/addComment'

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  addComment: (data) => dispatch(addComment(data))
})


class CommentInput extends Component {

  static propTypes = {
    id: PropTypes.number,
    author: PropTypes.object,
    sampleText: PropTypes.string,
    date: PropTypes.string,
  };


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

      MuiTypography: {
        h5: {
          fontFamily: 'Montserrat',
          fontWeight: '2em',
          borderBottom: '2px solid #f2935c',
          margin: '0.5em',
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
    this.state = {
      content: '',
      error: '',
      currentUser: JSON.parse(window.localStorage.getItem("currentUser"))
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

  comment = (e) => {
    e.preventDefault();
    let data = {
      userId: this.state.currentUser.id,
      text: this.state.content,
      publicationId: this.props.publicationReducer.publication.id
    }
    this.props.addComment(data);
    this.setState({
      content: ''
    })
    setTimeout(()=>{
      this.props.update()
    }, 300)
  }

  render() {
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <Paper className="submitCommentPaper">
          <form className="submittCommentForm" id="submitCommentForm">
            <div className="commentCard">
              <Typography variant="h5" > Comment here:</Typography>
              <div className="commentInfo">
                <Link to={"/homePage/profilePage/" + this.props.author.username.toLowerCase()} replace>
                  <span className="commentAuthor" >@{this.props.author.username}</span>
                </Link>
                <div className="commentDate">
                  {this.props.date}
                </div>
              </div>
              <div className="commentSampleText">
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={10}
                  value={this.state.content}
                  onChange={this.handleChange}
                  name="content"
                  margin="dense"
                  label="Content"
                  type="text"
                />
              </div>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={this.comment}
              //disabled={!this.state.username || !this.state.password}
              >
                Comment
                        </Button>

            </div>
          </form>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);