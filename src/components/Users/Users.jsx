import { React } from 'react';
import styles from './Users.module.css'

let Users = function (props) {

    let url = 'https://www.nicepng.com/png/detail/528-5280185_png-file-svg-windows-10-avatar-transparent.png'

    // if (props.users.length < 1) {
    //     props.setUsers([
    //         { id: 1, photo: url, followed: false, name: 'Name1', surname: 'Surname1', location: { city: 'City1', country: 'Country1' }, annotation: 'Annotation' },
    //         { id: 2, photo: url, followed: true, name: 'Name2', surname: 'Surname2', location: { city: 'City2', country: 'Country2' }, annotation: 'Annotation2' },
    //         { id: 3, photo: url, followed: false, name: 'Name3', surname: 'Surname3', location: { city: 'City3', country: 'Country3' }, annotation: 'Annotation3' },
    //     ]);
    // }

    return (
        props.users.map(el => (
            <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photo} className={styles.usersPhoto} /></div>
                    <div>
                        {el.followed ? <button onClick={() => { props.unfollowClick(el.id) }}>Unfollow</button> : <button onClick={() => { props.followClick(el.id) }}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span><div>{el.name}</div>
                        <div>{el.annotation}</div></span>
                    <span><div>{el.location.city}</div>
                        <div>{el.location.country}</div></span>
                </span>

            </div>))
    )
}

export default Users