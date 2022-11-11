import store from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_POST = 'DELETE-POST';


let idCounter = 3;

export const profileReducer = function (state, action) {

    switch (action.type) {

        case ADD_POST:
            idCounter += 1;
            let text = state.textOnTextarea;
            let newPost = {
                id: idCounter,
                text: text,
                likesqty: 0
            }
            state.posts.push(newPost);
            state.textOnTextarea = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.textOnTextarea = action.text;
            return state;

        case DELETE_POST:
            let index;
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id == action.id) index = i;
            }
            state.posts.splice(index, 1);
            return state;

        default: return state;
    }
}

export const addPostActionCreator = function () {
    return ({
        type: ADD_POST
    })
}

export const deletePostActionCreator = function (id) {
    return ({
        type: DELETE_POST,
        id: id
    })
}

export const onPostChangeCreator = function (text) {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
    })
}