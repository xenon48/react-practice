import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator, setUsersCountActionCreator, setFetchingActionCreator } from '../../redux/usersReducer';
import axios from 'axios';
import { React, Component } from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { getUsersRequest } from '../../api/api';


class UsersContainer extends Component {

    componentDidMount() {

        this.props.fetchingIconState(true)

        getUsersRequest(this.props.currentPage, this.props.pageSize)
            .then((response) => {
                this.props.setUsers(response.items);
                this.props.setUsersCount(response.totalCount);
                this.props.fetchingIconState(false)

            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.fetchingIconState(true)

        getUsersRequest(page, this.props.pageSize)
            .then((response) => {
                this.props.fetchingIconState(false)
                this.props.setUsers(response.items);
            });
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
    }
}



export default connect(mapStateToProps,
    {
        followClick: followActionCreator,
        unfollowClick: unfollowActionCreator,
        setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setUsersCount: setUsersCountActionCreator,
        fetchingIconState: setFetchingActionCreator,
    })
    (UsersContainer)