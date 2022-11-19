import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';


let mapStateToProps = function (state) {
    return {
        users: state.usersPage.users
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)