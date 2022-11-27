import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator, setUsersCountActionCreator, setFetchingActionCreator } from '../../redux/usersReducer';
import axios from 'axios';
import { React, Component } from 'react';
import Users from './Users';
import preloader from '../../assets/images/preloader.svg';
import Preloader from '../Common/Preloader/Preloader';


class UsersContainer extends Component {

    componentDidMount() {

        this.props.fetchingIconState(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.fetchingIconState(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.fetchingIconState(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.fetchingIconState(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
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
            unfollowClick:unfollowActionCreator,
            setUsers: setUsersActionCreator,
            setCurrentPage: setCurrentPageActionCreator,
            setUsersCount: setUsersCountActionCreator,
            fetchingIconState: setFetchingActionCreator,
        })
        (UsersContainer)