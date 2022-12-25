import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from './small-img/SU logo.svg'
import { Link } from 'react-router-dom';
import './NavBar.css'
import { LinkContainer } from 'react-router-bootstrap'
export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="body">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src={logo}
            width="56"
            height="56"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
         <Nav className='ms-5'>
          {/*Home*/}
          
          <LinkContainer to="/">
            <Nav.Link className='ms-lg-4 ms-sm-0'>Home</Nav.Link>
          </LinkContainer>
          {/* News */}
          <NavDropdown className='ms-lg-4 ms-sm-0' title="News" id="basic-nav-dropdown">
            <LinkContainer to='/statements'>
              <NavDropdown.Item>Statements</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/recent-news'>
              <NavDropdown.Item>Recent News</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <Nav.Link className='ms-lg-4 ms-sm-0'>Spring Revolution</Nav.Link>
          {/* Student Association */}
          <NavDropdown className='ms-lg-4 ms-sm-0' title="Students' Association" id="basic-nav-dropdown">
            <LinkContainer to='/student-association'>
              <NavDropdown.Item>Students' Association</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/student-club'>
              <NavDropdown.Item>Students' Clubs</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/other-club'>
              <NavDropdown.Item>Other Clubs</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown className='ms-lg-4 ms-sm-0' title="University Affairs" id="basic-nav-dropdown">
            <LinkContainer to='/campus-master-plan'>
              <NavDropdown.Item>Campus Master Plan</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/autonomy-charter'>
              <NavDropdown.Item>Autonomy & Charter</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        
          
          
          <LinkContainer to='/about'>
            <Nav.Link className='ms-lg-4 ms-sm-0'>About Us</Nav.Link>
          </LinkContainer>
         </Nav>
        </Navbar.Collapse>
              
            
          
      </Container>
    </Navbar>
  )
}
