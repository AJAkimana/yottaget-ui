import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Container, Divider } from '@material-ui/core';

const Homepage = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='#home'>Yottaget</Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#features'>Add your house</Nav.Link>
        <Nav.Link href='#pricing'>Help</Nav.Link>
        <Nav.Link href='#pricing'>Sign up</Nav.Link>
        <Nav.Link href='#pricing'>Log in</Nav.Link>
      </Nav>
      <Nav>
        <Button variant='danger'>Contact us!</Button>
      </Nav>
    </Navbar>
  );
};
export default Homepage;
