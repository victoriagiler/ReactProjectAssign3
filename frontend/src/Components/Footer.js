import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const Footer = () => {
  return (
    <footer>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">Thank you for visiting our Team 2 project!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <Nav.Link href="/events">Back to HomeScreen</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
   
  )
}

export default Footer