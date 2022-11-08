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
                addPost={props.addPost}
                changeNewPostText={props.changeNewPostText} />
        </div>
    )
}

export default Profile;