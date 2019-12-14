import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import './allPage.css';
import PostCard from '../postCard/postCard';
import { connect } from 'react-redux';

import getAllPublications from '../../actions/getAllPublications';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getAllPublications: () => dispatch(getAllPublications()),
})


class AllPage extends Component {

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
    this.props.getAllPublications();
    this.state = {
      publications: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        publications: this.props.publicationReducer.publications,
      })
    }, 600)
  }

  convertMonth = (month) =>{
    switch(month){
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
        <div className="allPage">
          <section className="allTitle">
            All Posts
                  </section>
          <section className="allPosts">
            {
              this.state.publications.map(publication => (
                <PostCard
                  id = {publication.id}
                  title={publication.title}
                  author={publication.user}
                  sampleText={publication.text}
                  date={this.convertMonth(new Date(publication.created).getMonth())+ " " + new Date(publication.created).getDate()+ " " + new Date(publication.created).getFullYear()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPage)