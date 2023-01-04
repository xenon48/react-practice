import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';




const MyPosts = function (props) {

    let addPost = function (values) { // слушатель кнопки добавления поста
        props.addPost(values.newPostBody);
    }

    let postsData = props.posts.map((el) => (
        <Post message={el.text} likes={el.likesqty} id={el.id} deletePost={props.deletePost} />
    ));

    return (
        <div className={classes.addingPosts}>
            <h3>MY POSTS</h3>
            <AddPostFormHOC onSubmit={addPost} />
            <div className={classes.posts}>
                {postsData}
            </div>

        </div>)
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name="newPostBody" placeholder='Enter your post...'
                validate={[required, maxLengthCreator(30)]} /></div>
            <div><button>Add</button></div>
        </form>
    )
}

const AddPostFormHOC = reduxForm({ form: "addPostForm" })(AddPostForm);

export default MyPosts;