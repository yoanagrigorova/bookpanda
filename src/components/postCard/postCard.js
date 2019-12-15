import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './postCard.css';

class PostCard extends Component {

    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        sampleText: PropTypes.string,
        date: PropTypes.string,
    };

    render() {
        console.log(this.props)
        return (
            <Link to={{
                pathname: "/homePage/singlePost/" + this.props.id,
                publication:{
                    id:this.props.id,
                title:this.props.title,
                user: this.props.author,
                text: this.props.sampleText,
                date:this.props.date
                }
            }}
             className="postCard">
                <div className="postTitle">
                    {this.props.title}
                </div>
                <Link to={"/homePage/profilePage/"+this.props.author.username.toLowerCase()} className="postAuthor" replace>
                    @{this.props.author.username}
                </Link>
                <div className="postSampleText">
                    {this.props.sampleText}
                </div>
                <div className="postDate">
                    {this.props.date}
                </div>
            </Link>
        )
    }
}

export default PostCard;