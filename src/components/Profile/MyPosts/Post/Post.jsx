import React from 'react';
import { deletePostActionCreator } from '../../../../redux/profileReducer';
import classes from './Post.module.css';


const Post = function (props) {

    let deletePost = function () {
        props.deletePost(props.id)
    }

    return (
        <div className={classes.item}>
            <img src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg' />

            {props.message}

            <div>
                <span>{props.likes} likes</span>
                <button onClick={deletePost}>Delete post</button>
            </div>

        </div>)
}

export default Post;