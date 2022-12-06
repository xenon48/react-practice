import { React, Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataActionCreator } from '../../redux/authReducer';
import { authRequest } from '../../api/api';


class HeaderContainer extends Component {

    componentDidMount () {
        authRequest().then((response) => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setAuthData(id, email, login);
                } 
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthData: setUserDataActionCreator})(HeaderContainer) ;