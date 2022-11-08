import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = function (props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.posts}
                textOnTextarea={props.profilePage.textOnTextarea}
                dispatch={props.dispatch}
                deletePost={props.deletePost}/>
        </div>
    )
}

export default Profile;