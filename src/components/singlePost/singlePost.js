import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './singlePost.css';

class SinglePost extends Component {

    static propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string
    };

    render() {
        return (
            <div className="singlePost">
                <div className="postTitle">
                    {this.props.title}
                </div>
                <div className="postInfo">
                    @{this.props.author} | {this.props.date}
                </div>
                <div className="postContent">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default SinglePost