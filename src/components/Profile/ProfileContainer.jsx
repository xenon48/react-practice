import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator, setUserProfileActionCreator } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends Component {

    componentDidMount() {
        // alert(this.props.param.userId)
        let userId = this.props.param.userId
        this.props.setUserProfile(userId)

        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        //     .then((response) => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {
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

// let authRedirectComponent = function (props) {
//     if (!this.props.isAuth) return <Navigate to={'/login'} />;
//     return <ProfileContainer {...props} />
// }

let mapStateToProps = function (state) {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        if (!props.isAuth) return <Navigate to={'/login'} />;
        return (
            <Component
                {...props}
                param={params}
            />
        );
    }
    return ComponentWithRouterProp;
}

// export default connect(mapStateToProps, { setUserProfile: getProfileThunkCreator })(withRouter(ProfileContainer));

const connectCreator = function(Component) {
    return connect(mapStateToProps, { setUserProfile: getProfileThunkCreator })(Component)
}

export default compose(
    connectCreator,
    withRouter,
    withAuthRedirect
)(ProfileContainer);