import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = function (props) {

    let onPostChange = function () {
        let text = newPostText.current.value;
        props.changeNewPostText(text);
    }

    let newPostText = React.createRef(); // переменная для данных из textarea

    let addPost = function () { // слушатель кнопки добавления поста
        props.addPost()
    }

    let postsData = props.postsData.map((el) => (
        <Post message={el.text} likes={el.likesqty} />
    ));


    return (
        <div className={classes.addingPosts}>
            <h3>MY POSTS</h3>
            <div><textarea onChange={onPostChange} ref={newPostText} value={props.textOnTextarea} /></div>
            <div><button onClick={addPost}>Add Post</button></div>

            <div className={classes.posts}>
                {postsData}
            </div>

        </div>)
}

export default MyPosts;