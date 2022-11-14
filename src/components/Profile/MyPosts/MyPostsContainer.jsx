import React from 'react';
import { addPostActionCreator, deletePostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = function (props) {

    let state = props.store.getState();

    let onPostChange = function (text) {
        props.store.dispatch(onPostChangeActionCreator(text));
    }

    let addPost = function () { // слушатель кнопки добавления поста
        props.store.dispatch(addPostActionCreator());
    }

    let deletePost = function (id) {
        props.store.dispatch(deletePostActionCreator(id));
    }



    return (<MyPosts 
        updateTextarea={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        textOnTextarea={state.profilePage.textOnTextarea}
        deletePost={deletePost}/>)
}

export default MyPostsContainer;