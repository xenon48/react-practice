import { authRequest, loginRequest } from "../api/api";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = function (state = initialState, action) {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default: return state;
    }
}

export const setUserDataActionCreator = function (userId, email, login) {
    return ({
        type: SET_USER_DATA,
        data: {userId, email, login}

    })
}

export const authMeThunkCreater = function() {
    return function(dispatch) {
        authRequest().then((response) => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserDataActionCreator(id, email, login));
            } 
        });
    }
}

export const loginThunkCreater = function(email, password, rememberMe) {
    return function(dispatch) {
        loginRequest(email, password, rememberMe).then((response) => {
            if (response.resultCode === 0) {
                
            } 
        });
    }
}

export default authReducer;

