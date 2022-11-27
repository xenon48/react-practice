import axios from 'axios';
import { React, Component } from 'react';
import styles from './Users.module.css'
import defaultPhoto from '../../assets/images/avatar_default.png';

class Users extends Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map( (el) => {
                        return(<span className={this.props.currentPage === el ? styles.selectedPage : ''} onClick={ () => this.onPageChanged(el) }>  {el} </span>)
                    })}
                </div>

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