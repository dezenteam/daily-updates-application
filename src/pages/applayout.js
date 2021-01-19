import React from 'react';
import {Route } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const AppLayoutRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route
            {...rest}
            render={matchProps => (
                <Sidebar>
                    <Component {...matchProps} />
                </Sidebar>
            )}
        />
    );
};
export default AppLayoutRoute;