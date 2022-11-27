import { React, Component } from 'react';
import styles from './Users.module.css'
import defaultPhoto from '../../assets/images/avatar_default.png';


let Users = function (props) {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 10; i++) {
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
                    <div key={el.id}>
                        <span>
                            <div>
                                <img src={(el.photos.small) === null ? defaultPhoto : el.photos.small} className={styles.usersPhoto} /></div>
                            <div>
                                {el.followed ? <button onClick={() => { props.unfollowClick(el.id) }}>Unfollow</button> : <button onClick={() => { props.followClick(el.id) }}>Follow</button>}
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
        </div>
    )
}

export default Users;