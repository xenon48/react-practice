import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = function (props) {


    return (

        <div>
            <div><img src={props.profile.photos.large} /></div>

            <div className={classes.profileText}>
                <h2>{props.profile.fullName}</h2>
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo;