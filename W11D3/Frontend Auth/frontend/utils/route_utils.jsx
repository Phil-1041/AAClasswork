import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

// <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
 //provides, location, history and match in props
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

//boolean routes! endless possibilities for Auth or Protected routes