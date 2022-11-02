import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = ({Component}) => {
    const isAuthenticated = window.localStorage.getItem("Token");
    if (isAuthenticated !== null) {
        return <Component/>
    }else{
        <Navigate to="/"/>
    }
 
}
PrivateRoute.PropTypes = {
    Component: PropTypes.element
};