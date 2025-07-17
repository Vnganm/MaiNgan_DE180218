import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const LaptopManagement = ({ user, setUser }) => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  useEffect(() => {
    // Auto search when searchTerm changes
    if (laptops.length > 0) {
      if (searchTerm.trim() === '') {
        setFilteredLaptops(laptops);
      } else {
        const filtered = laptops.filter(laptop =>
          laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLaptops(filtered);
      }
    }
  }, [searchTerm, laptops]);

  const fetchLaptops = async () => {
    try {
      console.log('Fetching laptops...');
      const response = await axios.get('http://localhost:3001/Laptops');
      console.log('Laptops fetched:', response.data);
      setLaptops(response.data);
      setFilteredLaptops(response.data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
      // Không làm gì để tránh redirect về login
      setLaptops([]);
      setFilteredLaptops([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn form submit
    
    if (!laptops || laptops.length === 0) {
      console.log('No laptops data available');
      return;
    }
    
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleViewDetails = (laptopId) => {
    navigate(`/laptops/${laptopId}`);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Laptop Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleLogout}>
                Logout ({user.username})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row className="mb-4">
          <Col md={6}>
            <h2>Laptop List</h2>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSearch}>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search by brand or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                  className="me-2"
                />
                <Button variant="outline-primary" type="submit">
                  Search
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row>
          {filteredLaptops.map(laptop => (
            <Col xs={1} md={2} lg={3} key={laptop.id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={laptop.image}
                  alt={`${laptop.brand} ${laptop.model}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => handleViewDetails(laptop.id)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredLaptops.length === 0 && (
          <Row>
            <Col>
              <div className="text-center py-4">
                <h4>No laptops found</h4>
                <p>Try adjusting your search terms.</p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

LaptopManagement.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

export default LaptopManagement;