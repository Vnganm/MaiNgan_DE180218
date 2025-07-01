import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
    return (
        <BsNavbar bg="light" expand="lg">
            <Container>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/news">News</Nav.Link>
                        <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;