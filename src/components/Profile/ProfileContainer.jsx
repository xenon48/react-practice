import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, setUserProfileActionCreator, updateStatusThunkCreator } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends Component {

    componentDidMount() {
        
        let userId = this.props.param.userId
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


let mapStateToProps = function (state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <Component
                {...props}
                param={params}
            />
        );
    }
    return ComponentWithRouterProp;
}


const connectCreator = function(Component) {
    return connect(mapStateToProps, { setUserProfile: getProfileThunkCreator, getStatus: getStatusThunkCreator,  updateStatus: updateStatusThunkCreator})(Component)
}

export default compose(
    connectCreator,
    withRouter,
    withAuthRedirect
)(ProfileContainer);