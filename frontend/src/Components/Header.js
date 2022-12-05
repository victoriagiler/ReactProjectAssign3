import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <Nav.Link href="/events">events</Nav.Link>
              <Nav.Link href="/login"> Log In</Nav.Link>
              <Nav.Link href="/signup"> Sign up</Nav.Link>
              <Nav.Link href="/cart"><i className='fas fa-cart-shopping'></i> Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header