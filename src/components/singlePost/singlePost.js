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
                <div className="singlePostTitle">
                    {this.props.title}
                </div>
                <div className="singlePostInfo">
                    @{this.props.author} | {this.props.date}
                </div>
                <div className="singlePostContent">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default SinglePost