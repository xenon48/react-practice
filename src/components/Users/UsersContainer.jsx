import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator, setUsersCountActionCreator } from '../../redux/usersReducer';


let mapStateToProps = function (state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}


let mapDispatchToProps = function (dispatch) {
    return {
        followClick: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollowClick: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setUsersCount: (qty) => {
            dispatch(setUsersCountActionCreator(qty))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)