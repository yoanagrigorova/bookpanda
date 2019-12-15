import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './commentCard.css';

class CommentCard extends Component {

    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.object,
        sampleText: PropTypes.string,
        date: PropTypes.string,
    };

    render() {
        return (
            <div className="commentCard">
                <div className="commentInfo">
                    <Link  to={"/homePage/profilePage/"+this.props.author.username.toLowerCase()} replace>
                        <span className = "commentAuthor" >@{this.props.author.username}</span>
                    </Link>
                    <div className="commentDate">
                        {this.props.date}
                    </div>
                </div>
                <div className="commentSampleText">
                    {this.props.sampleText}
                </div>
 
            </div>
        )
    }
}

export default CommentCard;