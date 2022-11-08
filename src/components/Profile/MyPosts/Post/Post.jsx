import React from 'react';
import classes from './Post.module.css';


const Post = function (props) {
    return (
        <div className={classes.item}>
            <img src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg' />

            {props.message}

            <div>
                <span>{props.likes} likes</span>
            </div>

        </div>)
}

export default Post;