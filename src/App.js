import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Sidebar from './layout/Sidebar';
import './layout/layout.scss';
import LoginPage from './components/LoginPage/LoginPage';
import AppLayoutRoute from './components/Applayout';
import Header from './layout/Header/Header';

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
              <div className='content sb-mc'>
                <div className='grid grid-cols-12 gap-6 mt-5'>
                  <Route exact path='/' component={LoginPage} />
                  <Route  path='/home' component={Home} />
                  <Route  path='/user/:id' component={User} />
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
