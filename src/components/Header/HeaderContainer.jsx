import { React, Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunkCreater } from './../../redux/authReducer';

class HeaderContainer extends Component {

    componentDidMount (props) {
        this.props.setAuthData()
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

export default connect(mapStateToProps, {setAuthData: authMeThunkCreater})(HeaderContainer) ;