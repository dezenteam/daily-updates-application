import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { MdPayment } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { RiAlertLine } from 'react-icons/ri';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className='side-nav-main'>
          <nav className='side-nav'>
            <div className='sb-logo'>
              <div className='logo  mx-auto'>
                <i className='fa fa-user-circle icon-user' />
                <h3 className='logo-admin-text'>Nabeel Tayyab</h3>
              </div>
            </div>

            <div className='side-nav__devider my-6'></div>
            <ul>
              <li>
                <NavLink
                  to={'/dashboard'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <FiHome className=' fa-lg mr-3' />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/user/NabeelTayyab'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <MdPayment className=' fa-lg mr-3' />
                  Table APIs Data
                </NavLink>
              </li>
              <li>
                <li>
                  <NavLink
                    to={'/profile'}
                    className='side-menu'
                    activeClassName='side-menu--active'
                  >
                    <FaUserCircle className=' fa-lg mr-3' /> Profile
                  </NavLink>
                </li>
                <NavLink
                  to={'/table'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/formValidation'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/mapcontainer'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Contact form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/servicess'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/plants'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/multiplecarousel'}
                  className='side-menu'
                  activeClassName='side-menu--active'
                >
                  <RiAlertLine className=' fa-lg mr-3' /> Multiple Carousel
                </NavLink>
              </li>
              <li>
                <NavLink to={'/'} className='side-menu' activeClassName=''>
                  <FaSignOutAlt className=' fa-lg mr-3' />
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='content sb-mc'>
                <div className='grid grid-cols-12 gap-6 mt-5'>
                  {this.props.children}
                </div>
         </div>
      </Fragment>
    );
  }
}

export default Sidebar;
