import React from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Thay thế FontAwesome bằng React Icons

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className="fs-1" href="#">Pizza House</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        
        <Nav className="me-auto mt-1">
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>

        <Form className="d-flex" style={{ paddingRight: '120px' }}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="danger" style={{ paddingRight: '15px' }}>
            <FaSearch />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;