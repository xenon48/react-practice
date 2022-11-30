import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 2;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then((response) => {
                console.log('GET')
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        debugger


        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    return {
        profile: state.profilePage.profile,
    }
}

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                param={params}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(withRouter(ProfileContainer));