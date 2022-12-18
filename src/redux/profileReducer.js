import { getProfileRequest } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, text: 'post...1', likesqty: 56 },
        { id: 2, text: 'post...2', likesqty: 58 },
        { id: 3, text: 'post...3', likesqty: 10 }],
    textOnTextarea: '',
    profile: null,
}

let idCounter = initialState.posts.length;

export const profileReducer = function (state = initialState, action) {

    switch (action.type) {

        case ADD_POST:
            idCounter += 1;
            let text = state.textOnTextarea;
            let newPost = {
                id: idCounter,
                text: text,
                likesqty: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                textOnTextarea: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                textOnTextarea: action.text,
            };

        case DELETE_POST:
            let index;
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id == action.id) index = i;
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            stateCopy.posts.splice(index, 1);
            return stateCopy;

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

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

export const onPostChangeActionCreator = function (text) {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
    })
}

export const setUserProfileActionCreator = function (profile) {
    return ({
        type: SET_USER_PROFILE,
        profile: profile
    })
}

export const getProfileThunkCreator = function (id) {
    return function (dispatch) {
        if (!id) id = 2;
        getProfileRequest(id)
        .then((response) => {
            dispatch(setUserProfileActionCreator(response))
        });
    }
}