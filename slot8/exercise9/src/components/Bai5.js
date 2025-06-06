import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Bai5 = () => {
  return (
    <>
      {/* Header với logo và navigation */}
      <Navbar bg="warning" expand="lg" className="pb-2 pt-4">
        <Container fluid className="flex-column">
          {/* Logo */}
          <Navbar.Brand href="#" className="mx-auto mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/2560px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png"
              alt="FPT University"
              style={{ maxWidth: '600px', width: '100%', background: '#fff' }}
              className="d-block mx-auto"
            />
          </Navbar.Brand>

          {/* Navigation */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" active className="text-white px-2">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white px-2">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white px-2">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <Container className="text-center my-5">
        <h4 id="about" className="fw-bold">
          About
        </h4>
        <p>This is the about section of the website.</p>
        
        <h4 id="contact" className="fw-bold mt-4">
          Contact
        </h4>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <footer className="bg-warning text-white text-center py-3">
        <Container>
          &copy; 2023 Website. All rights reserved.
        </Container>
      </footer>
    </>
  );
};

export default Bai5;