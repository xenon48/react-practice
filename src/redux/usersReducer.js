import { bindActionCreators } from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURR_PAGE = 'SET-CURR-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const VIEW_LOADING_ICON = 'VIEW-LOADING-ICON'
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    follProgress: []
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

        case VIEW_LOADING_ICON:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case FOLLOWING_PROGRESS:
            return {
                ...state,
                follProgress: action.follProgressStatus ?
                    [...state.follProgress, action.userId] :
                    state.follProgress.filter((id) => id != action.userId)
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

export const setFetchingActionCreator = function (isFetching) {
    return ({
        type: VIEW_LOADING_ICON,
        isFetching: isFetching
    })
}

export const follProgressActionCreator = function (follProgressStatus, userId) {
    return ({
        type: FOLLOWING_PROGRESS,
        follProgressStatus: follProgressStatus,
        userId: userId
    })
}

