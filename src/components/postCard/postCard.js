import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './postCard.css';

class PostCard extends Component {

    static propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        sampleText: PropTypes.string,
        date: PropTypes.string,
    };

    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="postCard">
                <div className="postTitle">
                    {this.props.title}
                </div>
                <Link to={"/homePage/profilePage/"+this.props.author.toLowerCase()} className="postAuthor" replace>
                    @{this.props.author}
                </Link>
                {/* <div className="postAuthor" onClick = {this.redirect}>
                    @{this.props.author}
                </div> */}
                <div className="postSampleText">
                    {this.props.sampleText}
                </div>
                <div className="postDate">
                    {this.props.date}
                </div>
            </div>
        )
    }
}

export default PostCard;