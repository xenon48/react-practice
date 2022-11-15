import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, deletePostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



// const MyPostsContainer = function (props) {

    // let state = props.store.getState();

    // let onPostChange = function (text) {
    //     props.store.dispatch(onPostChangeActionCreator(text));
    // }

    // let addPost = function () { // слушатель кнопки добавления поста
    //     props.store.dispatch(addPostActionCreator());
    // }

    // let deletePost = function (id) {
    //     props.store.dispatch(deletePostActionCreator(id));
    // }

//     return (
//         <storeContext.Consumer>
//             {store => {
//                 let state = store.getState();
//                 let onPostChange = function (text) {
//                     store.dispatch(onPostChangeActionCreator(text));
//                 }

//                 let addPost = function () { // слушатель кнопки добавления поста
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let deletePost = function (id) {
//                     store.dispatch(deletePostActionCreator(id));
//                 }
//                 return (
//                     <MyPosts
//                         updateTextarea={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         textOnTextarea={state.profilePage.textOnTextarea}
//                         deletePost={deletePost} />)
//             }
//             }
//         </storeContext.Consumer>)
// }

let mapStateToProps = function (state) {
    return {
        posts: state.profilePage.posts,
        textOnTextarea: state.profilePage.textOnTextarea,
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        updateTextarea: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        deletePost: (id) => {
            dispatch(deletePostActionCreator(id));
        }
    }
}

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

    export default MyPostsContainer;