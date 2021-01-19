import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import User from './pages/User';
import Sidebar from './layout/Sidebar';
import './layout/layout.scss';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Profile from './pages/Profile/profile';


class App extends React.Component {
  render() {
    return (
      <>
        {' '}
        <Switch>
          <div className='container-fluid admin-fluid'>
            <div className='row' style={{ display: 'contents' }}>
              <Sidebar />
              <div className='content sb-mc'>
                <div className='grid grid-cols-12 gap-6 mt-5'>
                  <Route  exact path='/dashboard' component={Dashboard} />
                  <Route path='/user/:id' component={User} />
                  <Route  path='/Login' component={Login} />
                  <Route path='/profile' component={Profile} />
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
