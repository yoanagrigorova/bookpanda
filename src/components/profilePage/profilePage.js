import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import './profilePage.css';

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
    
    render() {
          return(
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <div className="profilePage">
                  <section className="userProfile">
                    <span className="userId"><FaceIcon className="userIcon"></FaceIcon>UserId</span>
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
                    <Button variant="outlined" color="primary">
                      Submit a post
                    </Button>
                  </section>
                  <section className="userPosts">
                    <div className="postCard">
                      <div className="postTitle">
                        Lorem ipsum dolor sit amet
                      </div>
                      <div className="postAuthor">
                        @Author
                      </div>
                      <div className="postSampleText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div className="postDate">
                        Aug 10th 2019
                      </div>
                    </div>
                  </section>
              </div>
            </MuiThemeProvider>
          )
      }
}

export default profilePage