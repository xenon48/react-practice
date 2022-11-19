import React from 'react';
import { addPostActionCreator, onPostChangeCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = function (props) {

    let newPostText = React.createRef(); // переменная для данных из textarea

    let onPostChange = function () {
        let text = newPostText.current.value;
        props.updateTextarea(text);
    }

    let addPost = function () { // слушатель кнопки добавления поста
        props.addPost();
    }

    let postsData = props.posts.map((el) => (
        <Post message={el.text} likes={el.likesqty} id={el.id} deletePost={props.deletePost} />
    ));

    return (
        <div className={classes.addingPosts}>
            <h3>MY POSTS</h3>
            <div><textarea onChange={onPostChange} ref={newPostText} value={props.textOnTextarea} placeholder='Enter new post...'/></div>
            <div><button onClick={addPost}>Add Post</button></div>

            <div className={classes.posts}>
                {postsData}
            </div>

        </div>)
}

export default MyPosts;