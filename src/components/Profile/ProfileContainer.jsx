import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/profileReducer';
import Preloader from '../Common/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainer extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response) => {
                console.log('GET')
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} 
                />
            </div>
        )
    }
}

let mapStateToProps = function(state) {
    return {
            profile: state.profilePage.profile,
        }
    }

export default connect(mapStateToProps, {setUserProfile: setUserProfileActionCreator})(ProfileContainer);