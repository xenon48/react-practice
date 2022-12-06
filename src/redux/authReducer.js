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

export default authReducer;

