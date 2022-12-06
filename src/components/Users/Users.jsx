import { React, Component } from 'react';
import styles from './Users.module.css'
import defaultPhoto from '../../assets/images/avatar_default.png';
import { NavLink } from 'react-router-dom';
import { followRequest, unfollowRequest } from '../../api/api';


let Users = function (props) {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 25; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((el) => {
                    return (<span className={props.currentPage === el ? styles.selectedPage : ''} onClick={() => props.onPageChanged(el)}>  {el} </span>)
                })}
            </div>

            {
                props.users.map(el => (
                    <div className={styles.users} key={el.id}>
                        <span>
                            <div><NavLink to={'/profile/' + el.id}>
                                <img src={(el.photos.small) === null ? defaultPhoto : el.photos.small} className={styles.usersPhoto} />
                            </NavLink></div>
                            <div>
                                {el.followed ?
                                    <button onClick={() => {
                                        unfollowRequest(el.id).then((response) => {
                                                if (response.resultCode == 0) {
                                                    props.unfollowClick(el.id)
                                                }
                                            });
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        followRequest(el.id).then((response) => {
                                                if (response.resultCode == 0) {
                                                    props.followClick(el.id)
                                                }
                                            });
                                    }}>Follow</button>}
                            </div>
                        </span>

                        <span>
                            <span><div>{el.name}</div>
                                <div>{el.status}</div></span>
                            <span><div>{"el.location.city"}</div>
                                <div>{"el.location.country"}</div></span>
                        </span>

                    </div>))
            }
        </div >
    )
}

export default Users;