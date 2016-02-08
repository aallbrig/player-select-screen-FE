import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'> Player Select Screen </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/play'>
              <NavItem eventKey={1}>Play</NavItem>
            </LinkContainer>
            <LinkContainer to='/select_character'>
              <NavItem eventKey={2}>Select Character</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to='/manage_user'>
              <NavItem eventKey={3}>Manage User</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});
