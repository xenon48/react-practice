import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = function (props) {
    return (
        <header className={classes.header}>
            <img src='https://tehno-krov.ru/wp-content/uploads/2018/04/%D0%A0%D0%96%D0%94.png'></img>

            <div className={classes.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;