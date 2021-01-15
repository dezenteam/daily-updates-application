import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Sidebar from './layout/Sidebar';
import './layout/layout.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import AppLayoutRoute from './components/Applayout';
import Header from './layout/Header/Header';
import HomePage from './pages/Home';
import CrudOperations from './pages/Cruds';

class App extends React.Component {
  render() {
    return (
      <>
        {' '}
        <Switch>
          
        <div>
          <div className='container-fluid admin-fluid'>
            <div className='row' style={{ display: 'contents' }}>
              <Sidebar />
              {/* <AppLayoutRoute  path='/home' component={HomePage} /> */}
              {/* <AppLayoutRoute  path='/user/taniarascia' component={User} /> */}
              {/* <AppLayoutRoute  path='/home' component={HomePage} /> */}
              <div className='content sb-mc'>
                <div className='grid grid-cols-12 gap-6 mt-5'>
                  <Route exact path='/' component={LoginPage} />
                  <Route  path='/home' component={Home} />
                  <Route  path='/user/:id' component={User} />
                  <Route  path='/component-1' component={CrudOperations} />
                  <Redirect to='/' component={LoginPage}  />
                </div>
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
