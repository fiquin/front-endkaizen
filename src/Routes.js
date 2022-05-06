import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Login} />
                <Route exact path='/createUser' component={CreateUser} />
            </Router>
        </>
    )
}

export default Routes;