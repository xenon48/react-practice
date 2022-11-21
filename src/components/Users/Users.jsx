import axios from 'axios';
import { React, Component } from 'react';
import styles from './Users.module.css'
import defaultPhoto from '../../assets/images/avatar_default.png';

class Users extends Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            });

    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers}>Show More</button> */}
                {
                    this.props.users.map(el => (
                        <div key={el.id}>
                            <span>
                                <div>
                                    <img src={(el.photos.small) === null ? defaultPhoto : el.photos.small} className={styles.usersPhoto} /></div>
                                <div>
                                    {el.followed ? <button onClick={() => { this.props.unfollowClick(el.id) }}>Unfollow</button> : <button onClick={() => { this.props.followClick(el.id) }}>Follow</button>}
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
}


export default Users