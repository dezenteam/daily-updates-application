import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './Header.css'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {isOpen:false};
  }

  toggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <>
      <div className='header bg-light'>
      <div className='container-fluid'>
        <Navbar color="light" light expand="md">
          <NavbarBrand >Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink className='nav-link' to={'/home'}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to={'/home/taniarascia'}>Table</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to={'/about'}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to={'/Grid'}>Grid</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to={'/'}>Login</NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
      </div>
      </>
    );
  }
}

export default Header;
