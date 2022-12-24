
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


let mapStateToPropsForRedirect = function (state) {
    return {
        isAuth: state.auth.isAuth
    };
}

export const withAuthRedirect = function (Component) {
    
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />;
            return <Component {...this.props} />
        }
    }

    let connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectedRedirectComponent;
}