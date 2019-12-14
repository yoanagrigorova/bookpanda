import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getPublicationById from "../../actions/getPublicationById"
import fetchUsers from "../../actions/fetchUsers"
import './singlePost.css';
import { connect } from 'react-redux';

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
        author: PropTypes.string,
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
            console.log(this.props)
            this.setState({
                publication:this.props.publicationReducer.publication,
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
                    @{this.state.publication ? this.state.publication.author : ""} | {this.state.publication ? this.convertMonth(new Date(this.state.publication.created).getMonth())+ " " + new Date(this.state.publication.created).getDate()+ " " + new Date(this.state.publication.created).getFullYear() : ""}
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