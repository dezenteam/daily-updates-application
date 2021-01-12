import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Sidebar from './layout/Sidebar';
import './layout/layout.scss';

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
                  <Route exact path='/home' component={Home} />
                  <Route path='/user/:id' component={User} />
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
