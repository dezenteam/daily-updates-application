import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
// import Home from './pages/Home';
import User from './pages/User';
// import Sidebar from './layout/Sidebar';
import './layout/layout.scss';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Profile from './pages/Profile/profile';
import AppLayoutRoute from './pages/applayout';
import EditProfile from './pages/Profile/editProfile';
import ChangePassword from './pages/Profile/changePassword';
import Table2 from './pages/Table/table';
import FormValidation from './pages/FormComponent/formValidation';

import MapContainer from './pages/mapcontainer';

class App extends React.Component {
  render() {
    return (
      <>
        {' '}
        <Switch>
          <div>
          <div className='container-fluid admin-fluid'>
            <div className='row' style={{ display: 'contents' }}>
              {/* <Sidebar />
              <div className='content sb-mc'>
                <div className='grid grid-cols-12 gap-6 mt-5'> */}
                <Route  exact path='/' component={Login} />
                <AppLayoutRoute  path='/dashboard' component={Dashboard} />
                <AppLayoutRoute path='/user/:id' component={User} />
                 
                <AppLayoutRoute path='/profile' component={Profile} />
                <AppLayoutRoute path='/editProfile' component={EditProfile} />
                <AppLayoutRoute path='/changePassword' component={ChangePassword} />
                <AppLayoutRoute path='/table' component={Table2} />
                <AppLayoutRoute path='/formvalidation' component={FormValidation} />
                <AppLayoutRoute path='/mapcontainer' component={MapContainer} />
                <Redirect path='*' component={Login} />
                </div>
              </div>
              </div>
            {/* </div>
          </div> */}
        </Switch>
      </>
    );
  }
}

export default App;
