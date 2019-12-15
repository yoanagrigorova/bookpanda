import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getPublicationById from "../../actions/getPublicationById"
import fetchUsers from "../../actions/fetchUsers"
import './singlePost.css';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

const mapStateToProps = state => ({
    ...state
  })
  const mapDispatchToProps = dispatch => ({
    getPublicationById: (id) => dispatch(getPublicationById(id)),
    getUsers: ()=> dispatch(fetchUsers())
  })

class SinglePost extends Component {

    static propTypes = {
        title: PropTypes.string,
        // author: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string
    };

    constructor(props){
        super(props);
        this.props.getPublicationById(this.props.location.pathname.split('/')[3]);
        // this.props.getUsers()
        this.state = {
            publication: this.props.location.publication? this.props.location.publication : null,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                publication:{
                    ...this.props.publicationReducer.publication,
                    date:this.convertMonth(new Date(this.props.publicationReducer.publication.created).getMonth())+ " " + new Date(this.props.publicationReducer.publication.created).getDate()+ " " + new Date(this.props.publicationReducer.publication.created).getFullYear()
                },
            })
        }, 500)
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
            <div className="singlePost">
                <div className="singlePostTitle">
                    {this.state.publication ? this.state.publication.title : ""}
                </div>
                <div className="singlePostInfo">
                   <Link to={this.state.publication? "/homePage/profilePage/" + this.state.publication.user.username : ""}> @{this.state.publication ? this.state.publication.user.username : ""}</Link> | {this.state.publication ? this.state.publication.date : ""}
                </div>
                <div className="singlePostContent">
                    {this.state.publication ? this.state.publication.text: ""}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SinglePost)
// export default SinglePost