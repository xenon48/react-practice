import { getProfileRequest, getStatus, updateStatus } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, text: 'post...1', likesqty: 56 },
        { id: 2, text: 'post...2', likesqty: 58 },
        { id: 3, text: 'post...3', likesqty: 10 }],
    profile: null,
    status: '',
}

let idCounter = initialState.posts.length;

export const profileReducer = function (state = initialState, action) {

    switch (action.type) {

        case ADD_POST:
            idCounter += 1;
            let text = action.text;
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

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };

        default: return state;
    }
}

export const addPostActionCreator = function (text) {
    return ({
        type: ADD_POST,
        text: text
    })
}

export const deletePostActionCreator = function (id) {
    return ({
        type: DELETE_POST,
        id: id
    })
}

export const setUserProfileActionCreator = function (profile) {
    return ({
        type: SET_USER_PROFILE,
        profile: profile
    })
}

export const setStatusActionCreator = function (status) {
    return ({
        type: SET_STATUS,
        status: status
    })
}


export const getProfileThunkCreator = function (id) {
    return function (dispatch) {
        if (!id) id = 26994;
        getProfileRequest(id)
            .then((response) => {
                dispatch(setUserProfileActionCreator(response))
            });
    }
}

export const getStatusThunkCreator = function (id) {
    return function (dispatch) {
        if (!id) id = 26994;
        getStatus(id)
            .then((response) => {
                dispatch(setStatusActionCreator(response))
            });
    }
}

export const updateStatusThunkCreator = function (status) {
    return function (dispatch) {
        updateStatus(status)
            .then((response) => {
                if (response.resultCode === 0) {
                dispatch(setStatusActionCreator(status))}
            });
    }
}

