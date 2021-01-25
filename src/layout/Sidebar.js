import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { MdPayment } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { RiAlertLine } from "react-icons/ri";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="side-nav-main">
          <nav className="side-nav">
            <div className="sb-logo">
              <div className="logo  mx-auto">
                <i className="fa fa-user-circle icon-user" />
                <h3 className="logo-admin-text">Shoaib Ahmed</h3>
              </div>
            </div>

            <div className="side-nav__devider my-6"></div>
            <ul>
              <li>
                <NavLink
                  to={"/profile"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <FiHome className=" fa-lg mr-3" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/restdata"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <MdPayment className=" fa-lg mr-3" />
                  Reactstrap Api
                </NavLink>
              </li>
              <li>
                <li>
                  <NavLink
                    to={"/home"}
                    className="side-menu"
                    activeClassName="side-menu--active"
                  >
                    <FaUserCircle className=" fa-lg mr-3" /> Profile
                  </NavLink>
                </li>
                <NavLink
                  to={"/crud"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> CRUDs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/info"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> Personal Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/settings"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/charts"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> Chats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> Products List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/component-6"}
                  className="side-menu"
                  activeClassName="side-menu--active"
                >
                  <RiAlertLine className=" fa-lg mr-3" /> Component6
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="side-menu" activeClassName="">
                  <FaSignOutAlt className=" fa-lg mr-3" />
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content sb-mc">
          <div className="grid grid-cols-12 gap-6 mt-2 mx-2">
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
