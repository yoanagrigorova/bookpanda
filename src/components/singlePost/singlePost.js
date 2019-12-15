import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getPublicationById from "../../actions/getPublicationById"
import fetchUsers from "../../actions/fetchUsers"
import './singlePost.css';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import CommentCard from '../commentCard/commentCard';
import CommentInput from '../commentCard/commentInput';
import addComment from '../../actions/addComment';
import getComments from '../../actions/getComments'

const mapStateToProps = state => ({
    ...state
  })
  const mapDispatchToProps = dispatch => ({
    getPublicationById: (id) => dispatch(getPublicationById(id)),
    getUsers: ()=> dispatch(fetchUsers()),
    addComment: (data) => dispatch(addComment(data)),
    getComments: (id) => dispatch(getComments(id))
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
        this.props.getComments(this.props.location.pathname.split('/')[3])
        this.state = {
            publication: this.props.location.publication? this.props.location.publication : null,
            currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
            comments: [],
            users: JSON.parse(window.localStorage.getItem("users"))
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                publication:{
                    ...this.props.publicationReducer.publication,
                    date:this.convertMonth(new Date(this.props.publicationReducer.publication.created).getMonth())+ " " + new Date(this.props.publicationReducer.publication.created).getDate()+ " " + new Date(this.props.publicationReducer.publication.created).getFullYear()
                },
                comments: this.props.publicationReducer.comments? this.props.publicationReducer.comments.reverse() : this.props.publicationReducer.comments,
                  
            })
        }, 600)
    }

    update = () => {
      this.props.getComments(this.props.location.pathname.split('/')[3])
      setTimeout(()=>{
        this.setState({
          comments: this.props.publicationReducer.comments? this.props.publicationReducer.comments.reverse() : this.props.publicationReducer.comments,
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
      const avi = {username: 'avi'}
        return (
          <div className="postContent">
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
            <CommentInput author={this.state.currentUser} update={this.update} ></CommentInput>
            {
              this.state.comments && this.state.comments.map(comment => (
                <CommentCard  author={this.state.users.find(user => user.id === comment.userId)} sampleText ={comment.text} date={this.convertMonth(new Date(comment.created).getMonth())+ " " + new Date(comment.created).getDate()+ " " + new Date(comment.created).getFullYear()} key={comment.created}></CommentCard>
              ))
            }
            
          </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SinglePost)
// export default SinglePost