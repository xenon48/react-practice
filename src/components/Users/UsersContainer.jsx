import { connect } from 'react-redux';
import { unfollowThunkCreator, followActionCreator, setCurrentPageActionCreator, unfollowActionCreator, follProgressActionCreator, getUsersThunkCreator, followThunkCreator } from '../../redux/usersReducer';
import { React, Component } from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';


class UsersContainer extends Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {

        this.props.getUsers(page, this.props.pageSize)

        //this.props.setCurrentPage(page)
        // this.props.fetchingIconState(true)

        // getUsersRequest(page, this.props.pageSize)
        //     .then((response) => {
        //         this.props.fetchingIconState(false)
        //         this.props.setUsers(response.items);
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowClick={this.props.unfollowClick}
                followClick={this.props.followClick}
                follProgress={this.props.follProgress}
                onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = function (state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follProgress: state.usersPage.follProgress
    }
}



export default connect(mapStateToProps,
    {
        getUsers: getUsersThunkCreator, 
        followClick: followThunkCreator,
        unfollowClick: unfollowThunkCreator,
        // setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        // setUsersCount: setUsersCountActionCreator,
        // fetchingIconState: setFetchingActionCreator,
        follProgressChange: follProgressActionCreator,
        

    })
    (UsersContainer)