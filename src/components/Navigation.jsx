import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import logo from '../images/logo.jpg';


function Navigation() {
  return (
    
    <>
      <Navbar fixed="top" bg="dark" variant="dark" style={{height:"50px"}} >
        <Container>
        <Navbar.Brand href="#home">
            <img 
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            BetterMind
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href= "../Pages/Treatment">Treatment</Nav.Link>
            <Nav.Link href= "../Pages/AboutUs">Abouth Us</Nav.Link>
            <Nav.Link href="../Pages/Contact">Contact</Nav.Link>    
            <Nav.Link href="../therapist/HomeT">Therapist</Nav.Link>  
        </Nav>
        <div>
          <Button variant="primary" href="../components/Login">Login </Button > {' '}
          <Button variant="primary" href="../components/SignUp">Get Started</Button > {' '}
        </div>
        </Container>
      </Navbar>
   
    </>
    
     
  );
}

export default Navigation;