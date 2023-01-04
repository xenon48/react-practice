import { connect } from 'react-redux';
import { addPostActionCreator, deletePostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = function (state) {
    return {
        posts: state.profilePage.posts,
        textOnTextarea: state.profilePage.textOnTextarea,
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        },
        deletePost: (id) => {
            dispatch(deletePostActionCreator(id));
        }
    }
}

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

    export default MyPostsContainer;