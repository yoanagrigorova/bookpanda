import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './postCard.css';

class PostCard extends Component {

    static propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        sampleText: PropTypes.string,
        date: PropTypes.string
    };

    render() {
        return (
            <div className="postCard">
                <div className="postTitle">
                    {this.props.title}
                </div>
                <div className="postAuthor">
                    @{this.props.author}
                </div>
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