import { bindActionCreators } from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURR_PAGE = 'SET-CURR-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    // users: [
    //     { id: 1, photo: url, followed: true, name: 'Name1', surname: 'Surname1', location: { city: 'City1', country: 'Country1' }, annotation: 'Annotation' },
    //     { id: 2, photo: url, followed: true, name: 'Name2', surname: 'Surname2', location: { city: 'City2', country: 'Country2' }, annotation: 'Annotation2' },
    //     { id: 3, photo: url, followed: false, name: 'Name3', surname: 'Surname3', location: { city: 'City3', country: 'Country3' }, annotation: 'Annotation3' },
    //     { id: 4, photo: url, followed: false, name: 'Name4', surname: 'Surname4', location: { city: 'City4', country: 'Country3' }, annotation: 'Annotation3' },
    // ],
}


export const usersReducer = function (state = initialState, action) {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return { ...el, followed: true }
                    }

                    return el;
                }),
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return { ...el, followed: false }
                    }
                    return el;
                }),
            }
        }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURR_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.qty
            }

        default: return state;
    }
}



export const followActionCreator = function (userId) {
    return ({
        type: FOLLOW,
        id: userId
    })
}

export const unfollowActionCreator = function (userId) {
    return ({
        type: UNFOLLOW,
        id: userId
    })
}

export const setUsersActionCreator = function (users) {
    return ({
        type: SET_USERS,
        users: users
    })
}

export const setCurrentPageActionCreator = function (page) {
    return ({
        type: SET_CURR_PAGE,
        page: page
    })
}

export const setUsersCountActionCreator = function (qty) {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        qty: qty
    })
}
